import type { APIRoute } from "astro";
import { contactPageContent } from "../../config";

// This route runs on the Worker rather than being prerendered at build time.
export const prerender = false;

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  organization: 150,
  message: 5000,
};

function json(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const POST: APIRoute = async ({ request, locals }) => {
  const apiKey = locals.runtime?.env?.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return json({ error: "Email is not configured." }, 500);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: "Invalid form submission." }, 400);
  }

  const field = (key: string) => String(form.get(key) ?? "").trim();

  // Bots fill in every field they find; humans never see this one.
  if (field("website")) {
    return json({ ok: true }, 200);
  }

  const name = field("name");
  const email = field("email");
  const organization = field("organization");
  const message = field("message");

  if (!name || !email || !message) {
    return json({ error: "Please fill in all required fields." }, 400);
  }
  if (!isValidEmail(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }
  for (const [key, value] of Object.entries({
    name,
    email,
    organization,
    message,
  })) {
    if (value.length > MAX_LENGTHS[key as keyof typeof MAX_LENGTHS]) {
      return json({ error: "That submission is too long." }, 400);
    }
  }

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    organization ? `Organization: ${organization}` : null,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactPageContent.sender,
        to: [contactPageContent.recipient],
        // Replying in the inbox goes straight back to the sender.
        reply_to: email,
        subject: `Website inquiry from ${name}`,
        text: body,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected the message", await response.text());
      return json({ error: "Could not send the message." }, 502);
    }
  } catch (error) {
    console.error("Failed to reach Resend", error);
    return json({ error: "Could not send the message." }, 502);
  }

  return json({ ok: true }, 200);
};
