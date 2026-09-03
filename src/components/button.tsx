import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-ink-950 hover:bg-brand-400 hover:scale-[1.03] shadow-[0_10px_30px_-10px_rgba(242,151,26,0.6)]",
  dark: "bg-ink-900 text-white hover:bg-brand-500 hover:text-ink-950 hover:scale-[1.03] dark:bg-white dark:text-ink-950 dark:hover:bg-brand-400",
  outline:
    "border-2 border-ink-900/15 text-fg hover:border-brand-500 hover:text-brand-600 dark:border-white/20 dark:hover:text-brand-400",
  ghost: "text-fg hover:text-brand-600 dark:hover:text-brand-400",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
