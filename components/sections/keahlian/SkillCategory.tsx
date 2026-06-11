import { SkillLogo } from "@/components/sections/keahlian/SkillLogo";
import type { SkillCategory as SkillCategoryType } from "@/lib/constants/skills";

type SkillCategoryProps = {
  category: SkillCategoryType;
};

function getGridClass(count: number): string {
  if (count === 2) return "grid-cols-2";
  if (count === 3) return "grid-cols-3 sm:grid-cols-2";
  if (count === 4) return "grid-cols-2";
  return "grid-cols-3";
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <article className="shadow-card-elevated relative flex flex-col rounded-xl border border-line/80 bg-bg-card px-3.5 pt-2.5 pb-3 transition-all duration-300 hover:border-primary/35 sm:h-full sm:rounded-2xl sm:px-5 sm:pt-2.5 sm:pb-4">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden="true"
      />

      <header className="flex shrink-0 flex-col">
        <h3 className="text-sm font-bold leading-tight tracking-tight text-title sm:text-lg">
          {category.title}
        </h3>
        <div
          className="mt-2 h-0.5 w-16 bg-gradient-to-r from-primary via-primary/60 to-transparent sm:mt-2.5 sm:h-px sm:w-24 sm:from-primary/80"
          aria-hidden="true"
        />
      </header>

      <ul
        className={`mt-2.5 grid place-items-center gap-x-3 gap-y-3 sm:mt-3 sm:flex-1 sm:content-center sm:place-items-center sm:items-center sm:gap-x-5 sm:gap-y-3 sm:pt-2 ${getGridClass(category.items.length)}`}
      >
        {category.items.map((item, index) => (
          <SkillLogo
            key={item.name}
            item={item}
            desktopSpan={
              category.items.length === 3 && index === category.items.length - 1
            }
          />
        ))}
      </ul>
    </article>
  );
}
