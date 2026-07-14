"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateCard } from "@/components/sections/sertifikat/CertificateCard";
import { CertificateModal } from "@/components/sections/sertifikat/CertificateModal";
import {
  CERTIFICATES,
  CERTIFICATES_SECTION,
  type Certificate,
} from "@/lib/constants/certificates";

export function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <section id="sertifikat" className="border-t border-line/60 bg-bg-main">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title={CERTIFICATES_SECTION.title} centered />
          <p className="mt-5 text-sm leading-relaxed text-body/85 sm:mt-6 sm:text-base sm:leading-7">
            {CERTIFICATES_SECTION.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {CERTIFICATES.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onView={setSelectedCertificate}
            />
          ))}
        </div>
      </Container>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
