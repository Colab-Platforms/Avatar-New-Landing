# Google Sheets Integration Guide (No Backend)

This guide explains how to send cyber webinar registration data directly to Google Sheets without a backend server.

## Overview

We'll use **Google Apps Script** as a web app endpoint to receive form data and write it to Google Sheets. This is completely free and requires no backend infrastructure.

---

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **"Cyber Webinar Registrations"**
4. In the first row, add these headers:
   - `A1`: **Timestamp**
   - `B1`: **Name** 
   - `C1`: **Email**
   - `D1`: **Phone**
   - `E1`: **Status**

---

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Append data to sheet
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone,
      'Registered'
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Registration saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function
function doGet(e) {
  return ContentService
    .createTextOutput('Google Sheets API is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

4. Click **Save** (💾 icon)
5. Name your project: **"Webinar Registration API"**

---

## Step 3: Deploy the Script as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Webinar Registration Endpoint"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone** (important!)
5. Click **Deploy**
6. **Authorize** the script (click "Authorize access")
7. Choose your Google account
8. Click **Advanced** → **Go to [Project Name] (unsafe)**
9. Click **Allow**
10. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/AKfycby.../exec`)

---

## Step 4: Update Your React Component

Replace the `handleSubmit` function in `CyberBookingModal.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbywb6jYf5RPlwUnYML_Z3x5bxWLdhrEahR8ToUzG5Heo32SQb0-9OWgM0RmFQUlH37TdA/exec';

    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      }),
    });

    // Note: With 'no-cors', we can't read the response
    // But if no error is thrown, it means the request was sent

    // Optional: Still send email notification via EmailJS
    const serviceID = 'service_7l4lbyj';
    const templateID = 'template_0kdgldl';
    const publicKey = 'ozByteCBsOiKFuSwU';

    await emailjs.send(
      serviceID,
      templateID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        time: new Date().toLocaleString(),
      },
      publicKey
    );

    alert(
      `Registration successful! We've saved your details and will send the Zoom link to ${formData.email}`
    );

    setFormData({ name: '', email: '', phone: '' });
    closeModal();

  } catch (error) {
    console.error('Registration failed:', error);
    alert('Oops! Something went wrong. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Step 5: Environment Variable (Recommended)

For better security, store the URL in an environment variable:

1. Create `.env.local` in your project root:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

2. Update the component:

```typescript
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

if (!GOOGLE_SCRIPT_URL) {
  throw new Error('Google Sheets URL not configured');
}
```

3. Add `.env.local` to `.gitignore` (should already be there)

---

## Step 6: Test the Integration

1. Run your Next.js app: `npm run dev`
2. Open the cyber webinar page
3. Click "Book Now"
4. Fill the form and submit
5. Check your Google Sheet - a new row should appear!

---

## Troubleshooting

### Issue: Data not appearing in sheet

**Solution:**
- Verify the Web App URL is correct
- Make sure deployment is set to "Anyone" access
- Check the Apps Script execution logs: **Extensions** → **Apps Script** → **Executions**

### Issue: CORS errors in console

**Solution:**
- This is normal with `mode: 'no-cors'`
- The request still works, you just can't read the response
- Ignore these errors if data appears in the sheet

### Issue: "Authorization required" error

**Solution:**
- Redeploy the script
- Make sure "Execute as: Me" is selected
- Ensure you completed the authorization flow

---

## Advanced: Read Response (Optional)

If you need to read the response, use a CORS proxy or create a simple backend. However, for most cases, `no-cors` mode works fine since we only need to send data.

---

## Data Privacy & Security

⚠️ **Important Considerations:**

1. **Public URL**: The Web App URL is public, but only accepts POST requests
2. **Rate Limiting**: Google Apps Script has quotas (100 requests/day for free accounts)
3. **Data Validation**: Add validation in the Apps Script to prevent spam
4. **Sensitive Data**: Don't store passwords or payment info this way

### Add Basic Spam Protection (Optional)

Update your Apps Script:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Basic validation
    if (!data.name || !data.email || !data.phone) {
      throw new Error('Missing required fields');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email format');
    }
    
    // Check for duplicate emails (optional)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const emails = sheet.getRange('C:C').getValues();
    const isDuplicate = emails.some(row => row[0] === data.email);
    
    if (isDuplicate) {
      return ContentService
        .createTextOutput(JSON.stringify({
          status: 'warning',
          message: 'Email already registered'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Continue with saving...
    const timestamp = new Date();
    sheet.appendRow([timestamp, data.name, data.email, data.phone, 'Registered']);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Registration saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## Benefits of This Approach

✅ **No Backend Required** - Completely serverless  
✅ **Free** - Google Apps Script is free  
✅ **Real-time** - Data appears instantly  
✅ **Easy to Manage** - View/export data in Google Sheets  
✅ **Reliable** - Google's infrastructure  
✅ **Dual Backup** - Data in both Sheets and EmailJS  

---

## Alternative: Google Forms (Simpler but Less Customizable)

If you want an even simpler solution:

1. Create a Google Form
2. Get the form's pre-filled link
3. Submit data programmatically to the form URL

However, this approach gives you less control over the UI/UX.

---

## Next Steps

1. ✅ Set up Google Sheet with headers
2. ✅ Create and deploy Apps Script
3. ✅ Update React component with Web App URL
4. ✅ Test the integration
5. ✅ Add environment variable
6. ✅ (Optional) Add spam protection
7. ✅ Monitor registrations in Google Sheets

---

## Support

If you encounter issues:
- Check Apps Script execution logs
- Verify the Web App URL
- Ensure "Anyone" access is enabled
- Test with a simple curl command first

---

**Created:** May 15, 2026  
**Last Updated:** May 15, 2026
