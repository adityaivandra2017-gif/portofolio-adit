import type { ReactElement } from "react";
import { AnimatedRole } from "@/components/sections/beranda/AnimatedRole";
import { HERO } from "@/lib/constants/hero";

export function HeroIntro(): ReactElement {
  return (
    <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-3.5 lg:mt-5 lg:space-y-3">
      <p className="text-hero-graduate font-medium tracking-wide text-title/90">
        {HERO.graduate}
      </p>

      <div className="space-y-1 sm:space-y-1">
        <p className="text-base text-body/75 lg:text-[1.0625rem]">
          {HERO.interestPrefix}
        </p>
        <AnimatedRole />
      </div>

      <div
        className="h-px w-full max-w-[16rem] bg-gradient-to-r from-primary/50 via-primary/15 to-transparent sm:max-w-xs"
        aria-hidden="true"
      />
    </div>
  );
}
