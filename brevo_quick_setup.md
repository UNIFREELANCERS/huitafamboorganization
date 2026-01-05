# Brevo Newsletter Setup - Quick Reference

## 5-Minute Setup

### Step 1: Create Brevo Account
- Go to: https://www.brevo.com
- Click "Sign Up"
- Use your work email
- Verify your email address

### Step 2: Get API Key
1. Log in to Brevo
2. Click your **name** → **Settings**
3. Click **SMTP & API**
4. Scroll to "API Keys" section
5. Click **"Create a New API Key"**
6. Copy the key (looks like: `xkeysib-abc123...`)

### Step 3: Get List ID
1. In Brevo, click **Contacts** in left menu
2. Click **Lists**
3. Click on any existing list OR create new one
4. Look for **List ID** (usually a number: 2, 3, 5, etc.)
5. Copy this number

### Step 4: Update Your Code
1. Open: `brevo-newsletter.js`
2. Find lines 15-16:
   ```javascript
   const BREVO_LIST_ID = 2;
   const BREVO_API_KEY = 'xkeysib-';
   ```
3. Replace `2` with your List ID
4. Replace `'xkeysib-'` with your full API Key
5. Save file

**Done!** Newsletter now works on all pages.

---

## Example Configuration

Before:
```javascript
const BREVO_LIST_ID = 2;
const BREVO_API_KEY = 'xkeysib-';
```

After:
```javascript
const BREVO_LIST_ID = 5;
const BREVO_API_KEY = 'xkeysib-a1b2c3d4e5f6g7h8i9j0k1l2m3n4';
```

---

## Test It Works

1. Open any page in a browser
2. Scroll to "Stay Updated" section
3. Enter your email
4. Click "Subscribe"
5. You should see: ✓ Successfully subscribed!
6. Check email for Brevo confirmation (might be spam folder)

---

## Where Your Subscribers Go

1. Log into Brevo: https://app.brevo.com
2. Click **Contacts** → **Lists**
3. Select your newsletter list
4. See all subscribers there
5. Can send campaigns from Marketing → Campaigns

---

## Troubleshooting

**Newsletter button does nothing?**
- Check API key is correct
- Check List ID is correct
- Open browser console (F12) for error messages

**Subscribers not appearing?**
- Check you're looking in right list
- Might be in "Unverified" tab
- Wait a few seconds and refresh

**API Key isn't working?**
- Make sure you copied the FULL key
- Should start with `xkeysib-`
- Check for extra spaces

**Getting "409 Conflict" error?**
- This is normal - means email is already subscribed
- Not an error, ignore it

---

## Advanced: Understanding the Integration

When someone subscribes:
1. Browser sends email to Brevo API
2. Brevo adds email to your list
3. They receive confirmation email
4. You can send newsletters to this list

All handled automatically - no backend needed!

---

## Free Plan Details

- Brevo free plan includes:
  - Up to 300 emails/day
  - Unlimited contacts
  - Email templates
  - Reporting
  
Perfect for a non-profit foundation!

---

## Security Note

Your API key is sensitive. In production:
- Don't commit to GitHub
- Use environment variables
- Consider a backend endpoint

For now, it's fine to use this way.

---

## Need Help?

- **Brevo Help**: https://help.brevo.com
- **API Docs**: https://developers.brevo.com
- **Check Console**: Press F12 → Console tab for errors

---

**That's it! You're ready to go.** 🚀
