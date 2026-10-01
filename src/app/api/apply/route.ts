import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, mobile, pinCode, location, resumeBase64, resumeFileName, resumeMimeType } = body;

    // Server-side validation
    if (!fullName || !email || !mobile) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Mobile)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SCRIPT_WEBHOOK_URL;

    // If webhook URL is configured in .env.local, forward to Google Apps Script
    if (webhookUrl && webhookUrl.startsWith("https://script.google.com/macros/s/")) {
      try {
        const gasResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            mobile,
            pinCode: pinCode || "N/A",
            location: location || "N/A",
            resumeBase64: resumeBase64 || null,
            resumeFileName: resumeFileName || null,
            resumeMimeType: resumeMimeType || null,
            submittedAt: new Date().toISOString(),
          }),
        });

        const gasResult = await gasResponse.json();

        return NextResponse.json({
          success: true,
          message: "Application submitted and saved to Google Sheet!",
          resumeUrl: gasResult.resumeUrl || null,
        });
      } catch (gasError) {
        console.error("Error communicating with Google Apps Script:", gasError);
        return NextResponse.json(
          {
            success: false,
            error: "Failed to connect to Google Sheets webhook. Please verify your Apps Script deployment.",
          },
          { status: 502 }
        );
      }
    }

    // Fallback mode for development / preview before Google Apps Script URL is set
    console.log("[Dev Mode] Form submission received without live webhook URL:", {
      fullName,
      email,
      mobile,
      pinCode,
      location,
      hasResume: !!resumeBase64,
      resumeFileName,
    });

    return NextResponse.json({
      success: true,
      message:
        "Application received in preview mode! (Add GOOGLE_SCRIPT_WEBHOOK_URL in .env.local to sync directly to your live Google Sheet and Drive).",
      devMode: true,
    });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your application." },
      { status: 500 }
    );
  }
}
