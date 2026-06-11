"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scrollToSection";

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();

      const fromMobileMenu = Boolean(anchor.closest("#mobile-menu"));

      if (fromMobileMenu) {
        document.body.dataset.navigating = "true";
        window.setTimeout(() => {
          delete document.body.dataset.navigating;
        }, 1000);
      }

      scrollToSection(id, { fromMobileMenu });
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);
    requestAnimationFrame(() => {
      scrollToSection(id, { behavior: "auto" });
    });
  }, []);

  return null;
}
