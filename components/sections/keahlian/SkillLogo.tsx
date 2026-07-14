import type { CSSProperties } from "react";
import Image from "next/image";
import type { LogoDisplay, SkillItem } from "@/lib/constants/skills";

type CategoryLayout = "banner" | "compact";

type SkillLogoProps = {
  item: SkillItem;
  layout?: CategoryLayout;
  /** Desktop: logo ketiga di grid 2+1 — span 2 kolom, rata tengah */
  desktopSpan?: boolean;
  /** Logo terakhir sendirian — rata tengah di baris grid (mobile) */
  centerLast?: boolean;
};

const BASE_HEIGHT_MOBILE_REM = 3.75;

const displayStyles: Record<LogoDisplay, string> = {
  default: "",
  lighten: "brightness-[1.5] contrast-[1.08]",
  invert: "brightness-0 invert",
};

function getDesktopSlot(isWide: boolean, layout: CategoryLayout): string {
  if (layout === "banner") {
    if (isWide) return "sm:h-[4.5rem] sm:w-[5.5rem] sm:max-w-[5.5rem] sm:shrink-0";
    return "sm:h-[5.25rem] sm:w-[3.75rem] sm:max-w-[3.75rem] sm:shrink-0";
  }

  if (isWide) return "sm:h-[4rem] sm:w-[5.25rem] sm:max-w-[5.25rem] sm:shrink-0";
  return "sm:h-[4.75rem] sm:w-[4rem] sm:max-w-[4rem] sm:shrink-0";
}

function getMobileSlot(isWide: boolean, centerLast: boolean) {
  if (centerLast) {
    return {
      liMinH: "min-h-[6.25rem]",
      slot: "h-[6rem] max-w-[12rem]",
    };
  }

  if (isWide) {
    return {
      liMinH: "min-h-[4.75rem]",
      slot: "h-[4.5rem] max-w-[8.25rem]",
    };
  }

  return {
    liMinH: "min-h-[4.25rem]",
    slot: "h-[4rem] max-w-[5.5rem]",
  };
}

export function SkillLogo({
  item,
  layout = "compact",
  desktopSpan = false,
  centerLast = false,
}: SkillLogoProps) {
  const display = item.display ?? "lighten";
  const mobileScale = item.sizeMobile ?? item.size ?? 1;
  const desktopScale = item.sizeDesktop;
  const isWide = item.wide ?? false;
  const { liMinH, slot } = getMobileSlot(isWide, centerLast);
  const desktopSlot = getDesktopSlot(isWide, layout);

  return (
    <li
      className={`group flex min-w-0 items-center justify-center overflow-hidden px-0.5 sm:min-h-0 sm:w-auto sm:shrink-0 sm:overflow-visible ${
        desktopSpan ? "sm:col-span-2" : ""
      } ${centerLast ? "col-span-2 sm:col-span-1" : ""} ${liMinH}`}
    >
      <div
        className={`skill-logo-slot flex w-full items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-0.5 ${slot} ${desktopSlot}${
          desktopScale != null ? " has-desktop-scale" : ""
        }`}
        style={
          {
            "--logo-h": `${BASE_HEIGHT_MOBILE_REM * mobileScale}rem`,
            ...(desktopScale != null && { "--desktop-scale": desktopScale }),
          } as CSSProperties
        }
        title={item.name}
      >
        <Image
          src={item.logo}
          alt={item.name}
          width={200}
          height={100}
          sizes="(max-width: 640px) 140px, 200px"
          className={`skill-logo-img h-full max-h-full w-full object-contain sm:h-full sm:w-full sm:max-h-full ${displayStyles[display]}`}
          unoptimized
        />
      </div>
    </li>
  );
}
