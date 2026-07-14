import Image from "next/image";
import {
  CERTIFICATE_PROVIDER,
  type Certificate,
} from "@/lib/constants/certificates";

type CertificateCardProps = {
  certificate: Certificate;
  onView: (certificate: Certificate) => void;
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

export function CertificateCard({ certificate, onView }: CertificateCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <div className="shadow-card-elevated relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_24px_48px_-12px_rgba(63,95,144,0.35)]">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          aria-hidden="true"
        />

        <div className="relative flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex justify-center">
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
          </div>

          <h3 className="mt-4 text-center text-lg font-bold leading-snug tracking-tight text-title sm:mt-5 sm:text-xl">
            {certificate.title}
          </h3>

          <p className="mt-2 text-center text-xs font-medium text-primary/90 sm:text-sm">
            {certificate.issuer} • {certificate.year}
          </p>

          <div
            className="mx-auto mt-4 h-px w-full max-w-[12rem] bg-gradient-to-r from-transparent via-line/70 to-transparent sm:mt-5"
            aria-hidden="true"
          />

          <ul className="mt-4 flex-1 space-y-2 sm:mt-5 sm:space-y-2.5">
            {certificate.description.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs leading-relaxed text-body sm:text-sm sm:leading-6"
              >
                <BulletIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => onView(certificate)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/50 bg-primary/10 px-5 py-3 text-sm font-semibold tracking-wide text-title transition-all duration-300 ease-out hover:border-primary hover:bg-primary hover:shadow-[0_8px_32px_rgba(63,95,144,0.35)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card sm:mt-6"
          >
            Lihat Sertifikat
            <svg
              className="h-4 w-4 text-primary transition-colors duration-300 group-hover:text-title"
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
