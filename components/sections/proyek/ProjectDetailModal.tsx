"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { ProjectDemoAccounts } from "@/components/sections/proyek/ProjectDemoAccounts";
import type { Project } from "@/lib/constants/projects";

type ProjectDetailModalProps = {
  project: Project | null;
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

function FeatureIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-primary"
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

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const isOpen = project !== null;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
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

  if (!project) return null;

  const actionHref =
    project.type === "mobile" ? project.downloadUrl : project.liveUrl;
  const actionLabel =
    project.type === "mobile" ? "Download APK" : "Kunjungi Website";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-bg-main/80 backdrop-blur-sm transition-opacity"
        aria-label="Tutup detail proyek"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="shadow-card-elevated relative z-10 flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-2xl border border-line/80 bg-bg-card sm:max-h-[90dvh] sm:max-w-2xl sm:rounded-2xl lg:max-w-3xl">
        {/* Header bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-line/60 px-4 py-3.5 sm:px-6 sm:py-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary sm:text-sm">
            Detail Proyek
          </p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-lg border border-transparent p-2 text-body transition-colors duration-200 hover:border-line hover:bg-bg-main/60 hover:text-title focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Tutup"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto overscroll-contain">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full bg-bg-main sm:aspect-[16/10]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain object-center p-3 sm:p-4"
              priority
              unoptimized
            />
          </div>

          <div className="space-y-6 px-4 py-5 sm:space-y-7 sm:px-6 sm:py-7">
            {/* Title */}
            <div>
              <h2
                id="project-detail-title"
                className="text-2xl font-bold tracking-tight text-title sm:text-3xl"
              >
                {project.name}
              </h2>
              <div
                className="mt-3 h-0.5 w-20 bg-gradient-to-r from-primary via-primary/50 to-transparent sm:mt-4 sm:h-px sm:w-24 sm:from-primary/70"
                aria-hidden="true"
              />
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-body/70">
                Teknologi
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <span className="inline-flex rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-title">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-body/70">
                Fitur Utama
              </h3>
              <ul className="mt-3 space-y-2.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-body sm:text-base"
                  >
                    <FeatureIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-body/70">
                Deskripsi
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body sm:text-base sm:leading-7">
                {project.fullDescription}
              </p>
            </div>

            {/* Demo accounts */}
            {project.demoAccounts && project.demoAccounts.length > 0 && (
              <ProjectDemoAccounts accounts={project.demoAccounts} />
            )}

            {/* Action */}
            {actionHref && (
              <div className="border-t border-line/60 pt-5 sm:pt-6">
                <Button
                  href={actionHref}
                  variant="primary"
                  className="w-full !py-3.5 sm:w-auto"
                >
                  {project.type === "mobile" ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      {actionLabel}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="h-5 w-5"
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
                      {actionLabel}
                    </span>
                  )}
                </Button>
                {project.type === "mobile" && (
                  <p className="mt-3 text-xs text-body/60 sm:text-sm">
                    Link akan membuka Google Drive untuk mengunduh file APK.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
