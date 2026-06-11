import type { CSSProperties } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactLinkCard } from "@/components/sections/kontak/ContactLinkCard";
import {
  CONTACT_ADDRESS,
  CONTACT_LINKS,
  CONTACT_SECTION,
} from "@/lib/constants/contact";

export function Contact() {
  return (
    <section id="kontak" className="border-t border-line/60 bg-bg-main">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title={CONTACT_SECTION.title} centered />
          <p className="mt-5 text-sm leading-relaxed text-body/85 sm:mt-6 sm:text-base sm:leading-7">
            {CONTACT_SECTION.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl sm:mt-12 lg:mt-14">
          <h3 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            {CONTACT_SECTION.contactHeading}
          </h3>

          <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-3 sm:gap-4">
            {CONTACT_LINKS.map((link) => (
              <ContactLinkCard key={link.id} link={link} />
            ))}
          </div>

          <a
            href={CONTACT_ADDRESS.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group shadow-card-elevated mx-auto mt-4 flex max-w-lg items-center gap-3.5 rounded-xl border border-line/80 bg-bg-card px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 sm:mt-6 sm:gap-4 sm:px-5 sm:py-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line/60 bg-bg-main/60 transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 sm:h-12 sm:w-12">
              <div
                className="flex h-7 w-7 items-center justify-center sm:h-8 sm:w-8"
                style={{ "--icon-scale": 0.92 } as CSSProperties}
              >
                <Image
                  src={CONTACT_ADDRESS.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="contact-link-icon h-full w-full object-contain"
                  unoptimized
                />
              </div>
            </div>
            <div className="min-w-0 text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary/90 sm:text-sm">
                Lokasi
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-title transition-colors duration-300 group-hover:text-primary/90 sm:text-base">
                {CONTACT_SECTION.address}
              </p>
            </div>
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-16 lg:mt-20">
          <div
            className="mx-auto flex items-center justify-center gap-3"
            aria-hidden="true"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50 sm:w-16" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(63,95,144,0.6)]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50 sm:w-16" />
          </div>
          <p className="mt-6 font-medium italic tracking-wide text-title/90 sm:mt-7 sm:text-lg lg:text-xl">
            {CONTACT_SECTION.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}
