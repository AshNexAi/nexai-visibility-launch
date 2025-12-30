import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple email validation to avoid sending garbage to Resend
const isValidEmail = (email?: string) =>
  !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Vercel serverless function entrypoint
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body || {};

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  try {
    await resend.emails.send({
      from: "NexAI SEO <waitlist@nexaiseo.com>",
      to: email,
      subject: "You're on the NexAI SEO waitlist ✅",
      text:
        "Thanks for joining the NexAI SEO waitlist!\n\n" +
        "We’ll email you as soon as we’re live and share early access updates.\n\n" +
        "- NexAI SEO team",
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Resend send error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

