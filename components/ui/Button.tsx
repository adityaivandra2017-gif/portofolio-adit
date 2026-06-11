import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  rel?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-primary/60 bg-primary text-title shadow-[0_4px_24px_rgba(63,95,144,0.25)] hover:border-primary hover:bg-primary-hover hover:shadow-[0_8px_32px_rgba(63,95,144,0.4)] active:scale-[0.98]",
  outline:
    "border border-line bg-bg-card/40 text-title backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_4px_24px_rgba(63,95,144,0.15)] active:scale-[0.98]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const isExternal = href.startsWith("http");
  const linkTarget = target ?? (isExternal ? "_blank" : undefined);
  const linkRel = rel ?? (isExternal ? "noopener noreferrer" : undefined);

  return (
    <a
      href={href}
      target={linkTarget}
      rel={linkRel}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main sm:px-7 sm:py-3.5 sm:text-base ${variantStyles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
