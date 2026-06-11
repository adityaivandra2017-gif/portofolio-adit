import Image from "next/image";
import { SITE } from "@/lib/constants/site";

export function Logo() {
  return (
    <Image
      src={SITE.logo}
      alt={SITE.logoAlt}
      width={160}
      height={160}
      sizes="(max-width: 640px) 48px, 52px"
      className="h-12 w-12 object-contain sm:h-[52px] sm:w-[52px]"
      priority
      unoptimized
    />
  );
}
