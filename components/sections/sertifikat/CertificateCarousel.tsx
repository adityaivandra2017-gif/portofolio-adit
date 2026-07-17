"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CERTIFICATE_PROVIDER,
  type Certificate,
} from "@/lib/constants/certificates";

type CertificateCarouselProps = {
  certificates: readonly Certificate[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  onViewCertificate: () => void;
};

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

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}

export function CertificateCarousel({
  certificates,
  activeIndex,
  onIndexChange,
  onViewCertificate,
}: CertificateCarouselProps) {
  const shouldReduceMotion = useReducedMotion();
  const total = certificates.length;
  const active = certificates[activeIndex];

  const goTo = (index: number) => {
    if (total === 0 || index < 0 || index >= total) return;
    onIndexChange(index);
  };

  const goPrev = () => {
    if (total === 0) return;
    onIndexChange((activeIndex - 1 + total) % total);
  };

  const goNext = () => {
    if (total === 0) return;
    onIndexChange((activeIndex + 1) % total);
  };

  if (!active) return null;

  return (
    <article className="group relative mx-auto w-full max-w-md lg:max-w-sm">
      <div className="shadow-card-elevated relative overflow-hidden rounded-2xl border border-line/80 bg-bg-card transition-all duration-300 hover:border-primary/35">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/10 blur-3xl opacity-60"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          aria-hidden="true"
        />

        <div className="relative p-5 sm:p-6">
          {/* Logo & penerbit — sama untuk semua sertifikat Huawei */}
          <div className="flex flex-col items-center">
            <div
              className={`inline-flex items-center justify-center rounded-lg border px-2.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:px-3 sm:py-2 ${
                CERTIFICATE_PROVIDER.logoLightBg
                  ? "border-line/50 bg-[#eef2f7]"
                  : "border-line/70 bg-bg-main/80"
              }`}
            >
              <Image
                src={CERTIFICATE_PROVIDER.logo}
                alt={CERTIFICATE_PROVIDER.logoAlt}
                width={240}
                height={64}
                className="h-[3.5rem] w-auto max-w-[14rem] object-contain sm:h-[4rem] sm:max-w-[15rem]"
                unoptimized
              />
            </div>
            <p className="mt-3 text-xs font-medium text-primary/90 sm:mt-3.5 sm:text-sm">
              {active.issuer} • {active.year}
            </p>
          </div>

          <div
            className="mx-auto mt-5 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-line/70 to-transparent sm:mt-6"
            aria-hidden="true"
          />

          {/* Konten berganti per sertifikat */}
          <motion.div
            className="mt-5 sm:mt-6"
            drag={shouldReduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -48) goNext();
              else if (info.offset.x > 48) goPrev();
            }}
          >
            <div className="relative min-h-[12.5rem] sm:min-h-[13rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: 24 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, x: 0 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: -24 }
                  }
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-center text-lg font-bold leading-snug tracking-tight text-title sm:text-xl">
                    {active.title}
                  </h3>

                  <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
                    {active.description.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs leading-relaxed text-body sm:text-sm sm:leading-6"
                      >
                        <BulletIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigasi slide */}
          <div className="mt-6 flex items-center justify-between gap-3 sm:mt-7">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line/70 bg-bg-main/50 text-body transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-title focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Sertifikat sebelumnya"
            >
              <ChevronIcon direction="left" />
            </button>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5">
                {certificates.map((cert, index) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-6 bg-primary"
                        : "w-2 bg-line/80 hover:bg-primary/50"
                    }`}
                    aria-label={`Buka sertifikat ${cert.title}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>
              <p className="text-[0.6875rem] font-medium tabular-nums text-body/70 sm:text-xs">
                {activeIndex + 1} / {total}
              </p>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line/70 bg-bg-main/50 text-body transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-title focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Sertifikat berikutnya"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>

          <button
            type="button"
            onClick={onViewCertificate}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/50 bg-primary/10 px-5 py-3 text-sm font-semibold tracking-wide text-title transition-all duration-300 ease-out hover:border-primary hover:bg-primary hover:shadow-[0_8px_32px_rgba(63,95,144,0.35)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card sm:mt-6"
          >
            Lihat Sertifikat
            <svg
              className="h-4 w-4 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
