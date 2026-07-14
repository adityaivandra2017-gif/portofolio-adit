"use client";

import { useEffect, useState } from "react";
import { NavLink } from "@/components/ui/NavLink";
import { NAV_ITEMS } from "@/lib/constants/navigation";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-7 w-7 text-title"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

type MobileNavLinkProps = {
  href: string;
  children: string;
  onClick: () => void;
};

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3.5 text-base font-medium text-body transition-all duration-200 hover:bg-primary/10 hover:text-title active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset sm:px-4 sm:py-4"
    >
      <span className="min-w-0 truncate">{children}</span>
      <ChevronIcon />
    </a>
  );
}

type NavbarProps = {
  onMenuOpenChange?: (open: boolean) => void;
};

export function Navbar({ onMenuOpenChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onMenuOpenChange?.(isOpen);
  }, [isOpen, onMenuOpenChange]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.dataset.menuScrollY = String(scrollY);

    return () => {
      document.body.style.overflow = "";

      // Jangan reset posisi scroll jika navigasi sedang berjalan
      if (document.body.dataset.navigating === "true") {
        delete document.body.dataset.menuScrollY;
        return;
      }

      const savedScrollY = Number(document.body.dataset.menuScrollY ?? scrollY);
      delete document.body.dataset.menuScrollY;
      window.scrollTo(0, savedScrollY);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);

    requestAnimationFrame(() => {
      const menu = document.getElementById("mobile-menu");
      if (!menu) return;
      menu.style.transition = "";
      menu.style.opacity = "";
      menu.style.transform = "";
      menu.style.pointerEvents = "";
    });
  };

  return (
    <nav aria-label="Navigasi utama">
      {/* Desktop */}
      <ul className="hidden items-center gap-1.5 md:flex">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href}>{item.label}</NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2.5 text-body transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MenuIcon open={isOpen} />
      </button>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-14 z-40 border-b border-line/80 bg-bg-card/98 shadow-[0_16px_48px_rgba(0,0,0,0.38)] backdrop-blur-md transition-all duration-300 sm:top-16 md:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
          aria-hidden="true"
        />

        <ul className="flex flex-col px-2 py-2 sm:px-3 sm:py-2.5">
          {NAV_ITEMS.map((item, index) => (
            <li
              key={item.href}
              className={
                index < NAV_ITEMS.length - 1
                  ? "border-b border-line/45 last:border-b-0"
                  : undefined
              }
            >
              <MobileNavLink href={item.href} onClick={handleLinkClick}>
                {item.label}
              </MobileNavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
