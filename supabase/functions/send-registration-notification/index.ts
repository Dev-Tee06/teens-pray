import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    const payload = await req.json();

    // Verify this is an INSERT trigger payload from Supabase
    if (payload.type !== "INSERT" || !payload.record) {
      return new Response(
        JSON.stringify({ error: "Invalid payload type. Expected an INSERT payload." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { name, phone_number, church, location, created_at } = payload.record;

    // Build the email content using the PRD specifications
    const emailBody = `
      <h2>New TeenSpray Registration</h2>
      <p>A new participant has registered for the conference.</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone Number:</strong> ${phone_number}</li>
        <li><strong>Church:</strong> ${church}</li>
        <li><strong>Location:</strong> ${location}</li>
        <li><strong>Registration Time:</strong> ${new Date(created_at).toLocaleString()}</li>
      </ul>
    `;

    // Send the email using Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        // For testing, onboarding@resend.dev works if you send to the verified email in your Resend account.
        // Once a domain is verified, change this to "TeenSpray <noreply@yourdomain.com>"
        from: "TeenSpray Registration <onboarding@resend.dev>",
        to: ["babayodetestimony0318@gmail.com", "teenspray01@gmail.com"],
        subject: "New TeenSpray Registration",
        html: emailBody,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      return new Response(JSON.stringify({ success: true, data }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    } else {
      console.error("Resend API Error:", data);
      return new Response(JSON.stringify({ success: false, error: data }), {
        headers: { "Content-Type": "application/json" },
        status: 400,
      });
    }
  } catch (error: any) {
    console.error("Function Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
});
