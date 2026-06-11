import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const navLinkClassName =
  "inline-flex items-center justify-center rounded-lg border border-transparent px-4 py-2 text-base font-medium text-body transition-all duration-300 ease-out hover:border-primary/50 hover:bg-primary/10 hover:text-title hover:shadow-[0_0_20px_rgba(63,95,144,0.2)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-navbar";

export function NavLink({
  href,
  children,
  onClick,
  className = "",
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${navLinkClassName} ${className}`}
    >
      {children}
    </a>
  );
}
