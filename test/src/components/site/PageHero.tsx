import { SectionLabel } from "./SectionLabel";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 0%, color-mix(in oklab, var(--brand) 28%, transparent), transparent 70%), radial-gradient(50% 40% at 90% 20%, color-mix(in oklab, var(--cyan-accent) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionLabel variant="dark">{label}</SectionLabel>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold sm:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
