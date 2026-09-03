import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
        404
      </span>
      <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
        Sidan kunde inte hittas
      </h1>
      <p className="mt-4 max-w-md text-balance text-sm leading-relaxed text-muted sm:text-base">
        Sidan du letar efter finns inte längre, eller så har adressen ändrats. Gå tillbaka till startsidan
        eller kontakta oss så hjälper vi dig hitta rätt.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">
          <Home className="h-4 w-4" />
          Till startsidan
        </Button>
        <Button href="/kontakta-oss" variant="outline">
          Kontakta oss
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
