import Image from "next/image";
import { HERO } from "@/lib/constants/hero";

export function HeroPhoto() {
  return (
    <div className="relative hidden w-full items-center justify-center self-center md:flex">
      <div className="relative">
        {/* Glow halus */}
        <div
          className="absolute -inset-5 rounded-3xl bg-primary/12 blur-3xl"
          aria-hidden="true"
        />

        {/* Frame border kedua — offset kiri bawah agar seimbang */}
        <div
          className="absolute -bottom-3 -left-3 h-full w-full rounded-2xl border-2 border-primary/80 shadow-[0_0_20px_rgba(63,95,144,0.35)]"
          aria-hidden="true"
        />

        {/* Foto utama */}
        <div
          className="relative h-[min(340px,calc(100dvh-14rem))] w-[250px] overflow-hidden rounded-2xl border-2 border-primary/60 bg-white shadow-[0_10px_40px_rgba(63,95,144,0.28)] xl:h-[min(400px,calc(100dvh-14rem))] xl:w-[290px]"
        >
          <Image
            src={HERO.photo.src}
            alt={HERO.photo.alt}
            fill
            sizes="(min-width: 1280px) 290px, 250px"
            className="object-cover object-[center_28%]"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
