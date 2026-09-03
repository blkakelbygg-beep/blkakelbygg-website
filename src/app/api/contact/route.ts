import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema, serviceOptions } from "@/lib/validation";
import { company } from "@/lib/site-config";

export const runtime = "nodejs";

function serviceLabel(value: string) {
  return serviceOptions.find((s) => s.value === value)?.label ?? value;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ogiltig förfrågan." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Formuläret innehåller fel.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Honeypot tripped — pretend success, drop silently.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, service, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[api/contact] RESEND_API_KEY saknas – e-post skickas inte. Se README.md för hur du kopplar in Resend.",
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Formuläret är inte anslutet till e-post ännu. Lägg till RESEND_API_KEY i din miljö (se README.md).",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.RESEND_FROM_EMAIL || "BL Kakel & Bygg AB <onboarding@resend.dev>";
  const toAddress = process.env.RESEND_TO_EMAIL || company.email;

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `Ny offertförfrågan – ${serviceLabel(service)} (${name})`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="color:#17171b;margin-bottom:4px;">Ny förfrågan från hemsidan</h2>
          <p style="color:#5c5c66;margin-top:0;">blkakelbygg.se – kontaktformulär</p>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tbody>
              <tr><td style="padding:8px 0;color:#5c5c66;width:140px;">Namn</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:8px 0;color:#5c5c66;">E-post</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(email)}</td></tr>
              <tr><td style="padding:8px 0;color:#5c5c66;">Telefon</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(phone || "–")}</td></tr>
              <tr><td style="padding:8px 0;color:#5c5c66;">Tjänst</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(serviceLabel(service))}</td></tr>
            </tbody>
          </table>
          <p style="color:#5c5c66;margin-top:16px;margin-bottom:4px;">Meddelande</p>
          <p style="white-space:pre-wrap;background:#f4f2ec;border-radius:12px;padding:16px;">${escapeHtml(message)}</p>
        </div>
      `,
      text: `Ny förfrågan\n\nNamn: ${name}\nE-post: ${email}\nTelefon: ${phone || "–"}\nTjänst: ${serviceLabel(service)}\n\nMeddelande:\n${message}`,
    });

    if (error) {
      console.error("[api/contact] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Kunde inte skicka meddelandet just nu." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact] Unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Något gick fel. Försök igen." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
