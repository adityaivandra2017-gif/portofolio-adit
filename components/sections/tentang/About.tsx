import { Container } from "@/components/ui/Container";
import { ABOUT } from "@/lib/constants/about";

export function About() {
  return (
    <section
      id="tentang"
      className="border-t border-line/60 bg-bg-main"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Judul — satu saja */}
          <div className="lg:col-span-4 lg:pt-2">
            <h2 className="text-2xl font-bold tracking-tight text-title sm:text-3xl lg:text-4xl">
              {ABOUT.title}
            </h2>
            <div
              className="mt-4 h-px w-16 bg-gradient-to-r from-primary/70 to-transparent sm:mt-5 sm:w-24"
              aria-hidden="true"
            />
          </div>

          {/* Card deskripsi — efek terangkat */}
          <div className="lg:col-span-8 lg:pt-1">
            <div className="shadow-card-elevated relative overflow-hidden rounded-2xl border border-line/80 bg-bg-card p-6 transition-transform duration-300 sm:p-8 lg:p-10">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/10 blur-3xl"
                aria-hidden="true"
              />

              <p className="relative text-base leading-relaxed text-body sm:text-lg sm:leading-8">
                {ABOUT.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
