import type { CSSProperties } from "react";
import Image from "next/image";
import type { ContactLink } from "@/lib/constants/contact";

type ContactLinkCardProps = {
  link: ContactLink;
};

const ICON_SLOT =
  "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line/60 bg-bg-main/60 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 sm:h-12 sm:w-12";

export function ContactLinkCard({ link }: ContactLinkCardProps) {
  const iconScale = link.iconScale ?? 1;

  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className="group shadow-card-elevated relative flex items-center gap-3.5 rounded-xl border border-line/80 bg-bg-card px-4 py-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[0_16px_32px_-10px_rgba(63,95,144,0.3)] sm:flex-col sm:items-center sm:gap-0 sm:px-4 sm:py-5 sm:text-center"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden="true"
      />

      <div className={ICON_SLOT}>
        <div
          className="flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9"
          style={{ "--icon-scale": iconScale } as CSSProperties}
        >
          <Image
            src={link.icon}
            alt=""
            width={36}
            height={36}
            className="contact-link-icon h-full w-full object-contain"
            unoptimized
          />
        </div>
      </div>

      <div className="min-w-0 flex-1 sm:mt-3.5 sm:flex-none">
        <h3 className="text-sm font-semibold tracking-tight text-title sm:text-base">
          {link.label}
        </h3>
        <p className="mt-0.5 text-xs leading-snug text-body/75 transition-colors duration-300 group-hover:text-primary/90 sm:mt-1 sm:leading-relaxed">
          {link.hint}
        </p>
      </div>
    </a>
  );
}
