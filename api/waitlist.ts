import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple email validation to avoid sending garbage to Resend
const isValidEmail = (email?: string) =>
  !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Vercel serverless function entrypoint
export default async function handler(req: any, res: any) {
  console.log("📧 Waitlist API called - Method:", req.method);
  
  if (req.method !== "POST") {
    console.log("❌ Method not allowed:", req.method);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body || {};
  console.log("📥 Received email:", email);

  if (!isValidEmail(email)) {
    console.log("❌ Invalid email format:", email);
    return res.status(400).json({ error: "Invalid email" });
  }

  // Check if Resend API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY is not configured!");
    return res.status(500).json({ error: "Email service not configured" });
  }
  console.log("✅ Resend API key found (length:", process.env.RESEND_API_KEY.length, "chars)");

  try {
    console.log("🚀 Attempting to send email to:", email);
    console.log("📤 From address: NexAI SEO <waitlist@nexaiseo.com>");
    
    const result = await resend.emails.send({
      from: "NexAI SEO <waitlist@nexaiseo.com>",
      to: email,
      subject: "You're on the NexAI SEO waitlist ✅",
      text:
        "Thanks for joining the NexAI SEO waitlist!\n\n" +
        "We'll email you as soon as we're live and share early access updates.\n\n" +
        "- NexAI SEO team",
    });

    console.log("✅ Email sent successfully! Resend response:", JSON.stringify(result, null, 2));
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("❌ Resend send error:", error);
    console.error("❌ Error details:", JSON.stringify(error, null, 2));
    return res.status(500).json({ error: "Failed to send email" });
  }
}

