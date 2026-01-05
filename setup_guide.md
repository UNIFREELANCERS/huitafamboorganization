# Huit Fambo Foundation - Mobile & Newsletter Setup Guide

## ✅ Changes Implemented

### 1. Enhanced Mobile Hamburger Menu
- **Files Updated**: `responsive.css`, `nav.js`
- **Features**:
  - Functional hamburger menu for all screen sizes < 1024px
  - Smooth slide-down animation when opened
  - Click-outside to close functionality
  - Keyboard accessibility (Escape key to close)
  - Responsive touch-friendly targets (44px minimum)
  - Active state animations on hamburger icon
  - Automatic closing on link click
  - Focus management for keyboard navigation

### 2. Newsletter Section Added to All Pages
- **Pages Updated**: 
  - index.html
  - About.html
  - Donate.html
  - Impact.html
  - WhatWeDo.html
  - dance.html
  - waste.html
  - library.html
  - mentorship.html

- **Newsletter Section Features**:
  - Clean, centered design with yellow background
  - Email input with validation
  - Subscribe button with loading state
  - Success/error message display
  - Mobile-responsive layout
  - Accessibility features (aria labels)

### 3. Responsive CSS Improvements
- **Mobile-first approach**: Hamburger visible on screens < 1024px
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1023px  
  - Desktop: 1024px+
- **Features**:
  - Better button sizing (44px minimum for touch)
  - Enhanced focus states
  - Smooth animations
  - Newsletter form responsive layout
  - RTL language support hooks

### 4. Brevo Newsletter Integration
- **File Created**: `brevo-newsletter.js`
- **Features**:
  - Connects to Brevo API for email list management
  - Email validation before submission
  - API error handling with user-friendly messages
  - Loading states on form submission
  - Automatic success message dismissal
  - Works on all pages with the newsletter form

## 🔧 Setup Instructions for Brevo Integration

### Step 1: Create Brevo Account (if you don't have one)
1. Go to [https://www.brevo.com](https://www.brevo.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Get Your API Key
1. Log in to your Brevo account
2. Go to **Settings** → **SMTP & API**
3. Under "API Keys" section, click **"Create a New API Key"**
4. Name it something like "Huit Fambo Newsletter"
5. Copy the API key (it will start with `xkeysib-`)

### Step 3: Get Your List ID
1. In Brevo, go to **Contacts** → **Lists**
2. Click the list you want to use for newsletters (or create a new one)
3. Look for the "List ID" in the list details (usually a number like 2, 3, etc.)

### Step 4: Update brevo-newsletter.js
1. Open `brevo-newsletter.js` in your project
2. Find these lines at the top:
   ```javascript
   const BREVO_LIST_ID = 2; // Replace with your list ID
   const BREVO_API_KEY = 'xkeysib-'; // Replace with your API key
   ```
3. Replace `2` with your actual List ID from Step 3
4. Replace `'xkeysib-'` with your actual API key from Step 2

**Example:**
```javascript
const BREVO_LIST_ID = 5;
const BREVO_API_KEY = 'xkeysib-abc123def456ghi789jkl012';
```

## 📱 Testing the Features

### Test Hamburger Menu
1. Open any page in a mobile browser or use Chrome DevTools (F12 → Toggle device toolbar)
2. Set viewport to phone size (< 1024px width)
3. You should see a hamburger menu icon (☰) in the top right
4. Click it to see the navigation slide down
5. Click a link to see it close automatically
6. Click outside the menu to close it
7. Press Escape key to close it

### Test Newsletter
1. Scroll to any page to find the yellow "Stay Updated" section
2. Enter your email address
3. Click "Subscribe"
4. You should see a success message
5. Check your email for a Brevo confirmation message
6. Once confirmed, you'll receive newsletter emails

### Test on Different Screen Sizes
- **Desktop (1024px+)**: Hamburger should be hidden, nav should be horizontal
- **Tablet (768px-1023px)**: Hamburger visible, slightly larger text
- **Mobile (< 768px)**: Hamburger visible, optimized spacing

## 🎨 Customization Options

### Change Newsletter Section Colors
In your HTML pages, modify the `newsletter-section` styles or the CSS variables:
```css
--hf-yellow: #f9d342;  /* Change button and section background color */
```

### Modify Newsletter Section Text
Edit these in any HTML file's newsletter-section:
- `<h3>` text for the heading
- `<p>` text for the description
- Button text by changing the `<button>` text content

### Change Form Placeholder
In the HTML, find:
```html
<input placeholder="Enter your email" ... >
```
Change "Enter your email" to your preferred text.

## 🐛 Troubleshooting

### Newsletter Not Working
1. Check your browser console (F12 → Console tab) for errors
2. Verify your BREVO_API_KEY is correct in `brevo-newsletter.js`
3. Verify your BREVO_LIST_ID is correct
4. Make sure you're using an active Brevo account
5. Check if your Brevo account has confirmed the sender email

### Hamburger Menu Not Appearing
1. Make sure `responsive.css` is linked in your HTML head
2. Make sure `nav.js` is loaded before closing `</body>` tag
3. Check browser console for JavaScript errors
4. Verify your viewport meta tag is present: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### Menu Not Closing on Link Click
1. Make sure all navigation links are inside `.nav-links` element
2. Check that `nav.js` is properly loaded
3. Clear browser cache and hard refresh (Ctrl+Shift+R)

## 📊 Monitoring Newsletter Signups

1. Log in to [Brevo](https://app.brevo.com)
2. Go to **Contacts** → **Lists**
3. Select your newsletter list
4. You'll see all subscribers and can manage them from there
5. Use **Marketing** → **Campaigns** to send emails to your list

## 🔐 Security Notes

- Your API key is sensitive. Never commit it to public repositories
- Consider using environment variables in production
- The current implementation sends the API key from the client - for production, consider creating a backend endpoint to handle newsletter signups

## 📞 Support

For issues with:
- **Brevo**: Visit [Brevo Help Center](https://help.brevo.com)
- **Navigation/CSS**: Check browser console for errors
- **Email validation**: The form validates emails before submission

---

**All 9 pages now have**:
✅ Mobile hamburger menu navigation
✅ Newsletter subscription section with Brevo integration
✅ Responsive design that works on phones, tablets, and desktops
✅ Accessible forms and navigation

Your site is now fully mobile-optimized and ready for newsletter campaigns!
