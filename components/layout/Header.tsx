"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Navbar } from "@/components/layout/Navbar";
import { SITE } from "@/lib/constants/site";

const SCROLL_THRESHOLD = 24;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = isScrolled || isMenuOpen;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        isSolid
          ? "border-b border-line bg-bg-navbar/95 shadow-[0_4px_24px_rgba(0,0,0,0.18)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-14 items-center justify-between sm:h-16">
          <a
            href="#beranda"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main"
            aria-label={`${SITE.name} - Beranda`}
          >
            <Logo />
          </a>

          <Navbar onMenuOpenChange={setIsMenuOpen} />
        </div>
      </Container>
    </header>
  );
}
