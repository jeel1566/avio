# Google Sheets & Google Drive Integration Guide

This guide explains how to connect your **Avio Advision** Career Application Form directly to a live **Google Sheet** and save candidates' uploaded resumes into a **Google Drive folder**.

---

## 3-Minute Quick Setup

### Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.new) in your browser.
2. Name the sheet: **Avio Advision Candidates**.

### Step 2: Open Apps Script Editor
1. In the top menu of your Google Sheet, click **Extensions > Apps Script**.
2. A new tab will open with a code editor containing an empty `myFunction()`.
3. Select everything in the editor and delete it.
4. Copy the entire contents of [`Code.gs`](./Code.gs) and paste it into the editor.
5. Click the **Save** (floppy disk) icon or press `Ctrl + S` / `Cmd + S`.

### Step 3: Deploy as a Web App
1. Click the blue **Deploy** button at top right > **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the fields:
   - **Description**: `Avio Advision Form Webhook`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` *(Crucial: Allows the website form to submit without requiring candidate Google login)*
4. Click **Deploy**.
5. Google will ask you to **Authorize access**:
   - Click *Authorize access*.
   - Choose your Google account.
   - Click *Advanced* (small text at bottom) > Click *Go to Untitled project (unsafe)*.
   - Click *Allow*.
6. You will see a **Web app URL** that looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`
7. Copy this URL!

---

### Step 4: Add URL to your Website Environment
1. Open `.env.local` in the project root.
2. Paste your URL:
   ```env
   GOOGLE_SCRIPT_WEBHOOK_URL="https://script.google.com/macros/s/AKfycb.../exec"
   ```
3. Restart your dev server if running (`npm run dev`).

---

## How It Works in Production
1. **Instant Row Creation:** When a candidate fills the form, their details (Name, Email, Mobile, PIN Code, Location) are saved as a new row in the `"Job Applicants"` sheet.
2. **Automated Folder & Drive Link:** If the candidate uploaded a resume (PDF/DOC up to 5MB), Google Apps Script creates a Google Drive folder named `"Avio Advision Resumes"` (if not already created), uploads the file, sets view permissions, and inserts the clickable Google Drive link directly into that candidate's row!
3. **No Database Maintenance:** Non-technical HR and executive team members can immediately filter, share, and review applicants in Google Sheets and Drive.
