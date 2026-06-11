import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedName } from "@/components/sections/beranda/AnimatedName";
import { HeroButtons } from "@/components/sections/beranda/HeroButtons";
import { HeroIntro } from "@/components/sections/beranda/HeroIntro";
import { HeroPhoto } from "@/components/sections/beranda/HeroPhoto";
import { HERO } from "@/lib/constants/hero";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative -mt-14 min-h-svh overflow-hidden sm:-mt-16"
    >
      {/* Background gambar + overlay gelap */}
      <div className="absolute inset-0">
        <Image
          src="/images/jpg/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-bg-main/95 via-bg-main/88 to-bg-main/55" />
        <div className="absolute inset-0 bg-linear-to-b from-bg-main/80 via-transparent to-bg-main/30" />
      </div>

      {/* Konten */}
      <Container className="relative z-10 flex min-h-svh flex-col justify-center pt-20 pb-14 sm:justify-start sm:pt-28 sm:pb-20 md:pt-32 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-14 xl:gap-10 xl:py-16">
        <div className="flex w-full max-w-3xl flex-col lg:max-w-none lg:pr-4">
          <p className="mb-3.5 text-sm font-medium uppercase tracking-[0.22em] text-body sm:mb-3.5 sm:text-base lg:text-sm lg:tracking-[0.25em]">
            {HERO.greeting}
          </p>

          <AnimatedName />

          <HeroIntro />

          <p className="mt-5 max-w-none text-base leading-7 text-body sm:mt-6 sm:max-w-md sm:text-lg sm:leading-8 lg:mt-5 lg:max-w-md lg:text-base lg:leading-7 xl:text-lg xl:leading-8">
            {HERO.tagline}
          </p>

          <HeroButtons />
        </div>

        <HeroPhoto />
      </Container>
    </section>
  );
}
