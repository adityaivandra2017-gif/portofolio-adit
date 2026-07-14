import type { CSSProperties } from "react";
import Image from "next/image";
import type { ExperienceItem } from "@/lib/constants/experience";

type ExperienceCardProps = {
  experience: ExperienceItem;
};

function CalendarIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 text-primary/75"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function BulletIcon() {
  return (
    <svg
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-primary/90 sm:text-xs">
      {children}
    </h4>
  );
}

function ExperienceLogo({ experience }: { experience: ExperienceItem }) {
  const isWide = experience.logoWide ?? false;
  const useLightBg = experience.logoLightBg ?? false;
  const mobileScale = experience.logoScaleMobile ?? experience.logoScale ?? 1;
  const desktopScale = experience.logoScale ?? 1;

  const slotClass = isWide
    ? "h-[3rem] w-[6.75rem] sm:h-[3.75rem] sm:w-[12rem]"
    : "h-[3rem] w-[3rem] sm:h-[3.75rem] sm:w-[3.75rem]";

  return (
    <div className="relative shrink-0">
      <div
        className={`rounded-lg border p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors duration-300 group-hover:border-primary/30 sm:rounded-xl sm:p-2.5 ${
          useLightBg
            ? "border-line/50 bg-[#eef2f7]"
            : "border-line/70 bg-bg-main/80 shadow-[inset_0_1px_0_rgba(248,250,252,0.06)]"
        }`}
      >
        <div
          className={`flex items-center justify-center ${slotClass}`}
          style={
            {
              "--logo-h-mobile": `${3 * mobileScale}rem`,
              "--logo-h-desktop": `${3.75 * desktopScale}rem`,
            } as CSSProperties
          }
        >
          <Image
            src={experience.logo}
            alt={experience.logoAlt}
            width={isWide ? 260 : 120}
            height={isWide ? 80 : 120}
            sizes={isWide ? "(max-width: 640px) 108px, 192px" : "(max-width: 640px) 48px, 60px"}
            className="experience-logo-img h-full max-h-full w-full object-contain"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group relative h-full">
      <div className="shadow-card-elevated relative flex h-full flex-col overflow-hidden rounded-xl border border-line/80 bg-bg-card transition-all duration-300 hover:border-primary/35 sm:rounded-2xl">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          aria-hidden="true"
        />

        <div className="relative flex flex-1 flex-col p-3.5 sm:p-5">
          {/* Header — badge di atas, logo sejajar info perusahaan */}
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary sm:text-xs">
              {experience.typeLabel}
            </span>

            <div className="mt-2 flex items-center gap-3 sm:mt-2.5 sm:gap-4">
              <ExperienceLogo experience={experience} />

              <div className="min-w-0 flex-1 text-left">
                <h3 className="text-[0.9375rem] font-bold leading-snug tracking-tight text-title sm:text-lg">
                  {experience.company}
                </h3>

                <p className="mt-1 inline-flex items-center gap-1.5 text-[0.6875rem] text-body/75 sm:mt-1.5 sm:text-sm">
                  <CalendarIcon />
                  <time dateTime="2025-04-30/2025-05-31">{experience.period}</time>
                </p>

                <p className="mt-1.5 text-[0.6875rem] leading-relaxed text-body/85 sm:mt-2 sm:text-sm">
                  <span className="font-medium text-title/90">Bidang:</span>{" "}
                  {experience.field}
                </p>
              </div>
            </div>
          </div>

          <div
            className="my-3 h-px bg-gradient-to-r from-transparent via-line/70 to-transparent sm:my-4"
            aria-hidden="true"
          />

          {/* Keterampilan */}
          <div>
            <SectionLabel>Keterampilan</SectionLabel>
            <ul className="mt-1.5 flex flex-wrap justify-start gap-1.5 sm:mt-2 sm:gap-2">
              {experience.skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex rounded-md border border-primary/25 bg-primary/10 px-2 py-0.5 text-[0.6875rem] font-medium text-title sm:px-2.5 sm:py-1 sm:text-xs">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deskripsi */}
          <div className="mt-3 sm:mt-3.5">
            <SectionLabel>Deskripsi</SectionLabel>
            <ul className="mt-1.5 grid gap-1.5 sm:mt-2 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2">
              {experience.description.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[0.6875rem] leading-relaxed text-body sm:text-sm sm:leading-6"
                >
                  <BulletIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
