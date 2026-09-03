"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { contactFormSchema, serviceOptions } from "@/lib/validation";
import { company } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/70 outline-none transition-colors focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10";

export function ContactForm({ preselectedService }: { preselectedService?: string }) {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const raw = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || ""),
    };

    const parsed = contactFormSchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const [key, val] of Object.entries(parsed.error.flatten().fieldErrors)) {
        if (val?.[0]) errs[key] = val[0];
      }
      setFieldErrors(errs);
      setStatus("error");
      setErrorMsg("Kontrollera fälten markerade nedan.");
      return;
    }

    // Give slow connections/cold starts real headroom, but still fail with a
    // clear message instead of hanging forever if something goes wrong.
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
        signal: controller.signal,
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Något gick fel. Försök igen om en stund.");
        return;
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      // We couldn't confirm a response, but the request may still have
      // reached the server (e.g. a slow connection that dropped right as the
      // reply came back) — so we avoid claiming it definitely failed.
      setStatus("error");
      if (err instanceof DOMException && err.name === "AbortError") {
        setErrorMsg(
          `Det tog ovanligt lång tid att få svar. Din förfrågan kan ändå ha kommit fram — testa gärna igen om en stund, eller ring oss direkt på ${company.phone}.`,
        );
      } else {
        setErrorMsg(
          `Kunde inte bekräfta att meddelandet skickades. Kontrollera din internetanslutning och testa igen, eller ring oss på ${company.phone}.`,
        );
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-brand-400/30 bg-brand-500/10 px-6 py-16 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-brand-500" />
        <h3 className="mt-4 text-xl font-bold text-fg">Tack för din förfrågan!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Vi har tagit emot ditt meddelande och återkommer vanligtvis inom 24 timmar.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-600 underline underline-offset-4 dark:text-brand-400 cursor-pointer"
        >
          Skicka ett till meddelande
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field – hidden from real users, visible to naive bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Företag</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-fg">
            Namn *
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className={inputClasses} placeholder="Ditt namn" />
          {fieldErrors.name && <p className="mt-1.5 text-xs text-red-500">{fieldErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-fg">
            E-post *
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClasses} placeholder="din@epost.se" />
          {fieldErrors.email && <p className="mt-1.5 text-xs text-red-500">{fieldErrors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-fg">
            Telefonnummer
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} placeholder="070-123 45 67" />
          {fieldErrors.phone && <p className="mt-1.5 text-xs text-red-500">{fieldErrors.phone}</p>}
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-fg">
            Vilken tjänst gäller det? *
          </label>
          <select
            id="service"
            name="service"
            defaultValue={preselectedService ?? ""}
            className={`${inputClasses} appearance-none cursor-pointer`}
          >
            <option value="" disabled>
              Välj tjänst
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {fieldErrors.service && <p className="mt-1.5 text-xs text-red-500">{fieldErrors.service}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-fg">
          Meddelande *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Berätta gärna om ytans storlek, önskat material, adress och önskad tidsram — då kan vi ge dig en offert snabbare."
        />
        {fieldErrors.message && <p className="mt-1.5 text-xs text-red-500">{fieldErrors.message}</p>}
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Ju mer du berättar om projektet — typ av tjänst, ytans storlek, adress och önskat datum — desto
          snabbare kan vi ge dig ett prisförslag. Vi återkommer normalt inom 24 timmar.
        </p>
      </div>

      <AnimatePresence>
        {status === "error" && errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-start gap-2.5 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-500"
          >
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{errorMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 dark:bg-brand-500 px-6 py-3.5 text-sm font-bold text-white dark:text-ink-950 transition-all duration-300 hover:scale-[1.01] hover:bg-brand-500 dark:hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Skickar...
          </>
        ) : (
          <>
            Skicka förfrågan
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
