import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, service, message } = await req.json();

    const { error } = await resend.emails.send({
      from: "EcoSol Contact Form <onboarding@resend.dev>",
      to: "ms6542542@gmail.com",
      replyTo: email,
      subject: `New Consultation Request from ${name} — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #060f1c; color: #fff; border-radius: 12px;">
          <h2 style="color: #3A9E7A; margin-bottom: 24px;">New Consultation Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.5); width: 120px;">Name</td><td style="padding: 10px 0; color: #fff; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.5);">Company</td><td style="padding: 10px 0; color: #fff; font-weight: 600;">${company}</td></tr>
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.5);">Email</td><td style="padding: 10px 0; color: #3A9E7A;">${email}</td></tr>
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.5);">Service</td><td style="padding: 10px 0; color: #fff;">${service || "Not specified"}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #3A9E7A;">
            <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
            <p style="color: #fff; line-height: 1.7;">${message}</p>
          </div>
          <p style="margin-top: 24px; color: rgba(255,255,255,0.3); font-size: 12px;">Sent via EcoSol Technologies website contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Catch error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
