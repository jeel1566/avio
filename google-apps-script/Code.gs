/**
 * Avio Advision LLP — Google Apps Script Webhook
 *
 * This script accepts candidate application submissions from the website,
 * appends a new row to the Google Sheet ("Job Applicants"), and uploads
 * the candidate's resume directly to a dedicated Google Drive folder.
 *
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Open your Google Sheet (e.g., "Avio Advision Candidate Database").
 * 2. Click Extensions > Apps Script.
 * 3. Delete any code in Code.gs and paste this entire file.
 * 4. Click "Deploy" > "New deployment".
 * 5. Select type: "Web app".
 * 6. Set Description: "Avio Advision Form Webhook".
 * 7. Set "Execute as": "Me".
 * 8. Set "Who has access": "Anyone" (allows website to submit without Google login).
 * 9. Click "Deploy", authorize permissions when prompted, and copy the Web App URL.
 * 10. Paste this URL into your .env.local file as:
 *     GOOGLE_SCRIPT_WEBHOOK_URL="https://script.google.com/macros/s/XXXXX/exec"
 */

function doPost(e) {
  try {
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = "Job Applicants";
    var sheet = ss.getSheetByName(sheetName);

    // Create sheet if it does not exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Email Address",
        "Mobile Number",
        "PIN Code",
        "Location / Area",
        "Resume Link (Google Drive)",
        "Resume File Name",
        "Status"
      ]);
      // Format header row
      var headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setBackground("#0B1F3A");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    var timestamp = new Date();
    var fullName = data.fullName || "N/A";
    var email = data.email || "N/A";
    var mobile = data.mobile || "N/A";
    var pinCode = data.pinCode || "N/A";
    var location = data.location || "N/A";
    var resumeUrl = "No file uploaded";
    var resumeFileName = data.resumeFileName || "N/A";

    // Handle Resume Upload to Google Drive
    if (data.resumeBase64 && data.resumeFileName) {
      try {
        var folderName = "Avio Advision Resumes";
        var folders = DriveApp.getFoldersByName(folderName);
        var folder;
        if (folders.hasNext()) {
          folder = folders.next();
        } else {
          folder = DriveApp.createFolder(folderName);
        }

        var decodedData = Utilities.base64Decode(data.resumeBase64);
        var mimeType = data.resumeMimeType || "application/pdf";
        var cleanFileName = fullName.replace(/[^a-zA-Z0-9]/g, "_") + "_" + resumeFileName;
        var blob = Utilities.newBlob(decodedData, mimeType, cleanFileName);

        var file = folder.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        resumeUrl = file.getUrl();
      } catch (uploadError) {
        resumeUrl = "Upload failed: " + uploadError.toString();
      }
    }

    // Append candidate row
    sheet.appendRow([
      timestamp,
      fullName,
      email,
      mobile,
      pinCode,
      location,
      resumeUrl,
      resumeFileName,
      "New Candidate"
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Candidate application recorded successfully.",
        resumeUrl: resumeUrl
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: err.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "online",
      service: "Avio Advision Webhook Endpoint"
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
