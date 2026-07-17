"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Certificate } from "@/lib/constants/certificates";

type CertificateModalProps = {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
};

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function CertificateModal({
  certificate,
  isOpen,
  onClose,
}: CertificateModalProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const backdropTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: "easeOut" as const };

  const panelTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 320, damping: 28 };

  return (
    <AnimatePresence>
      {isOpen && certificate && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={backdropTransition}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-bg-main/85 backdrop-blur-sm"
            aria-label="Tutup sertifikat"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={backdropTransition}
          />

          <motion.div
            className="relative z-10 flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-line/80 bg-bg-card shadow-card-elevated"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.88 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
            transition={panelTransition}
            onClick={onClose}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-line/60 px-4 py-3.5 sm:px-5 sm:py-4">
              <div className="min-w-0 pr-3">
                <p
                  id="certificate-modal-title"
                  className="truncate text-sm font-semibold text-title sm:text-base"
                >
                  {certificate.title}
                </p>
                <p className="mt-0.5 text-xs text-body/70">
                  {certificate.issuer} • {certificate.year}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent p-2 text-body transition-colors duration-200 hover:border-line hover:bg-bg-main/60 hover:text-title focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Tutup"
              >
                <CloseIcon />
              </button>
            </div>

            <div
              className="relative overflow-y-auto overscroll-contain bg-bg-main/40 p-3 sm:p-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-xl border border-line/60 bg-bg-main sm:aspect-[3/2]">
                <Image
                  src={certificate.image}
                  alt={certificate.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-contain object-center p-2 sm:p-3"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
