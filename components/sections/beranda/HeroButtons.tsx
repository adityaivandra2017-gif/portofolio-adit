import { Button } from "@/components/ui/Button";
import { HERO } from "@/lib/constants/hero";

const heroButtonClass =
  "w-full !px-6 !py-3.5 !text-base sm:w-auto sm:!py-3 sm:!text-base lg:!px-6 lg:!py-3";

export function HeroButtons() {
  return (
    <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-3 lg:mt-6 lg:gap-2.5">
      <Button
        href={HERO.buttons.projects.href}
        variant="primary"
        className={heroButtonClass}
      >
        {HERO.buttons.projects.label}
      </Button>
      <Button
        href={HERO.buttons.downloadCv.href}
        download={HERO.buttons.downloadCv.fileName}
        variant="outline"
        className={heroButtonClass}
      >
        {HERO.buttons.downloadCv.label}
      </Button>
    </div>
  );
}
