import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site-config";

export function LogoMark({ className = "h-9" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/5 ${className}`}
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={394}
        height={480}
        className="h-full w-auto object-contain"
        priority
      />
    </span>
  );
}

export function Logo({
  className = "",
  markClassName = "h-9 sm:h-10",
  showWordmark = true,
}: {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 shrink-0 ${className}`}
      aria-label={`${company.name} – till startsidan`}
    >
      <LogoMark className={`${markClassName} transition-transform duration-300 group-hover:scale-105`} />
      {showWordmark && (
        <span className="leading-tight">
          <span className="block font-extrabold tracking-tight text-[15px] sm:text-base text-ink-900 dark:text-white">
            BL Kakel <span className="text-brand-500">&amp;</span> Bygg
          </span>
          <span className="block text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            Helsingborg
          </span>
        </span>
      )}
    </Link>
  );
}
