"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { company, services } from "@/lib/site-config";

const links = [
  { label: "Hem", href: "/" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Våra projekt", href: "/vara-projekt" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  React.useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const isServiceActive = services.some((s) => pathname === s.href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-lg border-b border-border shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 sm:h-[74px] items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-colors ${
              isActive("/") && pathname === "/"
                ? "text-brand-600 dark:text-brand-400"
                : "text-ink-700 hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-400"
            }`}
          >
            Hem
          </Link>

          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                isServiceActive
                  ? "text-brand-600 dark:text-brand-400"
                  : "text-ink-700 hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-400"
              }`}
            >
              Tjänster
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-3"
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-surface p-2 card-shadow">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.href}
                        className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-2"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        <span>
                          <span className="block text-sm font-semibold text-fg">{s.navLabel}</span>
                          <span className="block text-xs text-muted mt-0.5">{s.tagline}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-colors ${
                isActive(link.href)
                  ? "text-brand-600 dark:text-brand-400"
                  : "text-ink-700 hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 dark:text-ink-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {company.phone}
          </a>
          <ThemeToggle />
          <Link
            href="/kontakta-oss"
            className="inline-flex items-center rounded-full bg-ink-900 dark:bg-brand-500 px-5 py-2.5 text-sm font-bold text-white dark:text-ink-950 transition-transform duration-300 hover:scale-[1.04] hover:bg-brand-500 dark:hover:bg-brand-400"
          >
            Kostnadsfri offert
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Öppna meny"
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-700 dark:text-ink-200 cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-border bg-surface"
          >
            <div className="container-page py-4 flex flex-col gap-1">
              <Link href="/" onClick={closeMobileMenu} className="rounded-xl px-3 py-2.5 text-sm font-semibold text-fg hover:bg-surface-2">
                Hem
              </Link>

              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-fg hover:bg-surface-2 cursor-pointer"
              >
                Tjänster
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pl-3"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.href}
                        onClick={closeMobileMenu}
                        className="block rounded-xl px-3 py-2 text-sm text-muted hover:text-brand-600 dark:hover:text-brand-400"
                      >
                        {s.navLabel}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {links.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-fg hover:bg-surface-2"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/kontakta-oss"
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-fg hover:bg-surface-2"
              >
                Kontakta oss
              </Link>

              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
                <a href={company.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold text-fg">
                  <Phone className="h-4 w-4" />
                  {company.phone}
                </a>
                <Link
                  href="/kontakta-oss"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center rounded-full bg-ink-900 dark:bg-brand-500 px-5 py-3 text-sm font-bold text-white dark:text-ink-950"
                >
                  Kostnadsfri offert
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
