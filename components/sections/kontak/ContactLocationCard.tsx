"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useState } from "react";
import {
  CONTACT_ADDRESS,
  CONTACT_SECTION,
} from "@/lib/constants/contact";

export function ContactLocationCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="shadow-card-elevated mx-auto mt-4 flex w-full items-start gap-3.5 rounded-xl border border-line/80 bg-bg-card px-4 py-4 sm:mt-6 sm:gap-4 sm:px-5 sm:py-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line/60 bg-bg-main/60 sm:h-12 sm:w-12">
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

      <div className="min-w-0 flex-1 text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary/90 sm:text-sm">
          Lokasi
        </p>

        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          className="mt-1 w-full rounded-lg text-left transition-colors duration-200 hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card"
        >
          <p className="text-sm font-medium leading-relaxed text-title sm:text-[0.9375rem] sm:leading-7">
            {isExpanded ? (
              <>
                <span className="notranslate" translate="no">
                  {CONTACT_SECTION.address.plusCode}
                </span>
                {", "}
                {CONTACT_SECTION.address.detail}
              </>
            ) : (
              CONTACT_SECTION.address.short
            )}
          </p>
          <p className="mt-1 text-xs text-body/60">
            {isExpanded ? "Ketuk untuk ringkas" : "Ketuk untuk alamat lengkap"}
          </p>
        </button>

        {isExpanded && (
          <a
            href={CONTACT_ADDRESS.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors duration-200 hover:text-primary-hover sm:text-sm"
          >
            Buka di Google Maps
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
