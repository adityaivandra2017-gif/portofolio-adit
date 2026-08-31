import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactLinkCard } from "@/components/sections/kontak/ContactLinkCard";
import { ContactLocationCard } from "@/components/sections/kontak/ContactLocationCard";
import { CONTACT_LINKS, CONTACT_SECTION } from "@/lib/constants/contact";

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

          <ContactLocationCard />
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
