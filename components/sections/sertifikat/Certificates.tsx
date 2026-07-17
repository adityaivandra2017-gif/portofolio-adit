"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateCarousel } from "@/components/sections/sertifikat/CertificateCarousel";
import { CertificateModal } from "@/components/sections/sertifikat/CertificateModal";
import {
  CERTIFICATES,
  CERTIFICATES_SECTION,
} from "@/lib/constants/certificates";

export function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="sertifikat" className="border-t border-line/60 bg-bg-main">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title={CERTIFICATES_SECTION.title} centered />
          <p className="mt-5 text-sm leading-relaxed text-body/85 sm:mt-6 sm:text-base sm:leading-7">
            {CERTIFICATES_SECTION.subtitle}
          </p>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-14">
          <CertificateCarousel
            certificates={CERTIFICATES}
            activeIndex={activeIndex}
            onIndexChange={setActiveIndex}
            onViewCertificate={() => setIsModalOpen(true)}
          />
        </div>
      </Container>

      <CertificateModal
        certificate={CERTIFICATES[activeIndex] ?? null}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
