import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./social-icons";
import { Logo } from "./logo";
import { company, mainNav, services } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {company.description}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 transition-colors hover:bg-brand-500 hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 transition-colors hover:bg-brand-500 hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-fg">Tjänster</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="text-sm text-muted transition-colors hover:text-brand-600 dark:hover:text-brand-400">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-fg">Navigering</h3>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-brand-600 dark:hover:text-brand-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-fg">Kontakt</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </span>
              </li>
              <li>
                <a href={company.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-brand-600 dark:hover:text-brand-400">
                  <Phone className="h-4 w-4 shrink-0 text-brand-500" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={company.emailHref} className="flex items-center gap-2.5 transition-colors hover:text-brand-600 dark:hover:text-brand-400">
                  <Mail className="h-4 w-4 shrink-0 text-brand-500" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} {company.name}. Alla rättigheter förbehållna.
          </p>
          <p className="text-xs text-muted">GVK-auktoriserat hantverk i Helsingborg med omnejd.</p>
        </div>
      </div>
    </footer>
  );
}
