import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/sections/pengalaman/ExperienceCard";
import {
  EXPERIENCE_SECTION,
  EXPERIENCES,
} from "@/lib/constants/experience";

export function Experience() {
  return (
    <section id="pengalaman" className="border-t border-line/60 bg-bg-main">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title={EXPERIENCE_SECTION.title} centered />
          <p className="mt-5 text-sm leading-relaxed text-body/85 sm:mt-6 sm:text-base sm:leading-7">
            {EXPERIENCE_SECTION.subtitle}
          </p>
        </div>

        <div
          className={`mt-8 sm:mt-10 ${
            EXPERIENCES.length > 1
              ? "grid gap-4 sm:gap-5 lg:grid-cols-2 lg:items-stretch"
              : "mx-auto max-w-4xl"
          }`}
        >
          {EXPERIENCES.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </Container>
    </section>
  );
}
