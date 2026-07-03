import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCategory } from "@/components/sections/keahlian/SkillCategory";
import {
  SKILL_CATEGORIES,
  SKILLS_SECTION,
} from "@/lib/constants/skills";

export function Skills() {
  return (
    <section id="keahlian" className="border-t border-line/60 bg-bg-main">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title={SKILLS_SECTION.title} centered />
          <p className="mt-5 text-sm leading-relaxed text-body/85 sm:mt-6 sm:text-base sm:leading-7">
            {SKILLS_SECTION.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6 lg:mt-14 lg:gap-7">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategory
              key={category.id}
              category={category}
              layout={category.id === "frontend" ? "banner" : "compact"}
              className={category.id === "frontend" ? "sm:col-span-3" : "sm:h-full"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
