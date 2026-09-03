import { z } from "zod";

export const serviceOptions = [
  { value: "plattsattning", label: "Plattsättning – Kakel & Klinker" },
  { value: "badrumsrenovering", label: "Badrumsrenovering" },
  { value: "koksrenovering", label: "Köksrenovering" },
  { value: "byggnation-renovering", label: "Byggnation & Renovering" },
  { value: "microcement", label: "Microcement" },
  { value: "annat", label: "Annat / Vet inte än" },
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Ange ditt fullständiga namn."),
  email: z.string().trim().email("Ange en giltig e-postadress."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || v.replace(/[^\d+]/g, "").length >= 6, "Ange ett giltigt telefonnummer."),
  service: z.enum(serviceOptions.map((s) => s.value) as [string, ...string[]], {
    message: "Välj vilken tjänst det gäller.",
  }),
  message: z.string().trim().min(10, "Berätta lite mer om ditt projekt (minst 10 tecken)."),
  // Honeypot – should always arrive empty. Bots that fill every field trip this.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
