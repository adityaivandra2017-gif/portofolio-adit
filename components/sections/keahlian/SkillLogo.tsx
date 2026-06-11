import type { CSSProperties } from "react";
import Image from "next/image";
import type { LogoDisplay, SkillItem } from "@/lib/constants/skills";

type SkillLogoProps = {
  item: SkillItem;
  /** Desktop: logo ketiga di grid 2+1 — span 2 kolom, rata tengah */
  desktopSpan?: boolean;
};

const BASE_HEIGHT_MOBILE_REM = 3.75;

const displayStyles: Record<LogoDisplay, string> = {
  default: "",
  lighten: "brightness-[1.5] contrast-[1.08]",
  invert: "brightness-0 invert",
};

/** Slot seragam desktop — semua logo sama tinggi & lebar */
const DESKTOP_SLOT = "sm:h-[6.5rem] sm:w-[10rem] sm:max-w-[10rem]";

export function SkillLogo({ item, desktopSpan = false }: SkillLogoProps) {
  const display = item.display ?? "lighten";
  const mobileScale = item.sizeMobile ?? item.size ?? 1;
  const desktopScale = item.sizeDesktop ?? 1;
  const isWide = item.wide ?? false;

  return (
    <li
      className={`group flex min-w-0 items-center justify-center px-1 sm:min-h-[7rem] sm:items-center sm:justify-center sm:px-2 ${
        desktopSpan ? "sm:col-span-2" : ""
      } ${isWide ? "min-h-[4.75rem]" : "min-h-[4.25rem]"}`}
    >
      <div
        className={`flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-0.5 ${
          isWide
            ? `h-[4.25rem] max-w-[7.5rem] ${DESKTOP_SLOT}`
            : `h-[3.75rem] max-w-[5.25rem] ${DESKTOP_SLOT}`
        }`}
        style={
          {
            "--logo-h": `${BASE_HEIGHT_MOBILE_REM * mobileScale}rem`,
            "--logo-scale-sm": desktopScale,
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
          className={`skill-logo-img max-h-full max-w-full object-contain sm:h-full sm:w-full sm:max-h-full ${displayStyles[display]}`}
          unoptimized
        />
      </div>
    </li>
  );
}
