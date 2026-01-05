/**
 * Brevo Newsletter Integration
 * Integrates with Brevo (formerly Sendinblue) for newsletter subscriptions
 * Replace YOUR_API_KEY with your Brevo API key from https://app.brevo.com/
 */

(function() {
  const form = document.getElementById('brevoNewsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const messageEl = document.getElementById('newsletterMessage');

  if (!form || !emailInput) return; // Form not on this page

  // Configuration - Replace with your Brevo API details
  const BREVO_LIST_ID = 2; // Default list ID - Replace with your list ID from Brevo
  const BREVO_API_KEY = 'xkeysib-'; // Replace with your Brevo API key

  // Check if this is the featured newsletter section
  const isFeatured = form.classList.contains('newsletter-featured-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    // Reset message
    messageEl.style.display = 'none';
    messageEl.textContent = '';
    messageEl.className = 'newsletter-message';
    
    // Validate email
    if (!email || !isValidEmail(email)) {
      showMessage('Please enter a valid email address.', false);
      return;
    }
    
    // Disable button and show loading state
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = isFeatured ? '✓ Subscribing...' : 'Subscribing...';
    
    try {
      // Call Brevo API to add contact to list
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          listIds: [BREVO_LIST_ID],
          updateEnabled: true
        })
      });

      if (response.ok || response.status === 409) {
        // 409 means contact already exists - that's fine
        showMessage('✓ Successfully subscribed! Check your email for confirmation.', true);
        form.reset();
      } else {
        const error = await response.json();
        console.error('Brevo API error:', error);
        showMessage('Error subscribing. Please try again later.', false);
      }
    } catch (err) {
      console.error('Network error:', err);
      showMessage('Network error. Please check your connection and try again.', false);
    } finally {
      // Re-enable button
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showMessage(text, success = false) {
    messageEl.textContent = text;
    messageEl.style.display = 'block';
    messageEl.className = success ? 'newsletter-message success' : 'newsletter-message error';
    
    // Auto-hide success messages after 5 seconds
    if (success) {
      setTimeout(() => {
        messageEl.style.display = 'none';
      }, 5000);
    }
  }
})();
