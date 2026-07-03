import { SkillLogo } from "@/components/sections/keahlian/SkillLogo";
import type { SkillCategory as SkillCategoryType } from "@/lib/constants/skills";

type CategoryLayout = "banner" | "compact";

type SkillCategoryProps = {
  category: SkillCategoryType;
  layout?: CategoryLayout;
  className?: string;
};

function getGridClass(
  count: number,
  layout: CategoryLayout,
): string {
  if (layout === "banner") return "grid-cols-2 sm:grid-cols-7";

  if (count === 2) return "grid-cols-2";
  if (count === 3) return "grid-cols-3 sm:grid-cols-3";
  if (count === 7) return "grid-cols-2";
  return "grid-cols-3";
}

function getLogoLayout(
  count: number,
  index: number,
  layout: CategoryLayout,
): { desktopSpan: boolean; centerLast: boolean } {
  const isLast = index === count - 1;

  if (layout === "banner") {
    return { desktopSpan: false, centerLast: isLast };
  }

  if (count === 7 && isLast) {
    return { desktopSpan: false, centerLast: true };
  }

  return { desktopSpan: false, centerLast: false };
}

export function SkillCategory({
  category,
  layout = "compact",
  className = "",
}: SkillCategoryProps) {
  const isBanner = layout === "banner";

  return (
    <article
      className={`shadow-card-elevated relative flex flex-col rounded-xl border border-line/80 bg-bg-card px-3.5 pt-2.5 pb-3 transition-all duration-300 hover:border-primary/35 sm:rounded-2xl sm:px-5 sm:pt-2.5 sm:pb-4 ${
        isBanner ? "sm:px-8 sm:py-5" : ""
      } ${className}`}
    >
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
        className={`mt-2.5 grid place-items-center gap-x-2.5 gap-y-2.5 sm:mt-3 sm:flex-1 sm:place-items-center sm:items-center sm:pt-2 ${getGridClass(category.items.length, layout)} ${
          isBanner
            ? "sm:content-center sm:gap-x-5 sm:gap-y-3"
            : "sm:content-center sm:gap-x-3 sm:gap-y-4"
        }`}
      >
        {category.items.map((item, index) => {
          const { desktopSpan, centerLast } = getLogoLayout(
            category.items.length,
            index,
            layout,
          );

          return (
            <SkillLogo
              key={item.name}
              item={item}
              layout={layout}
              desktopSpan={desktopSpan}
              centerLast={centerLast}
            />
          );
        })}
      </ul>
    </article>
  );
}
