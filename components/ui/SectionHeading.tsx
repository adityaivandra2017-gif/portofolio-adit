type SectionHeadingProps = {
  title: string;
  label?: string;
  centered?: boolean;
};

export function SectionHeading({
  title,
  label,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : undefined}>
      {label && (
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary sm:text-sm">
          {label}
        </p>
      )}

      <h2
        className={`text-2xl font-bold tracking-tight text-title sm:text-3xl lg:text-4xl ${
          label ? "mt-2 sm:mt-3" : ""
        }`}
      >
        {title}
      </h2>

      {centered ? (
        <div
          className="mx-auto mt-5 flex items-center justify-center gap-3 sm:mt-6"
          aria-hidden="true"
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary/70 sm:w-14" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(63,95,144,0.6)]" />
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary/70 sm:w-14" />
        </div>
      ) : (
        <div
          className="mt-4 h-px w-16 bg-gradient-to-r from-primary/70 to-transparent sm:mt-5 sm:w-24"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
