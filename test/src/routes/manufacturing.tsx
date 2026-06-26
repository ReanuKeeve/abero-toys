import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionLabel } from "@/components/site/SectionLabel";
import { CTAButton } from "@/components/site/CTAButton";
import { CertBadges } from "@/components/site/CertBadges";
import { img } from "@/lib/site-images";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing · OEM · ODM — ABERO" },
      {
        name: "description",
        content:
          "Design, tooling, sampling, production, inspection, and packaging — end-to-end toy manufacturing support from ABERO.",
      },
      { property: "og:title", content: "Manufacturing · OEM · ODM — ABERO" },
      { property: "og:url", content: "/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
  component: ManufacturingPage,
});

const PROCESS = [
  {
    n: "01",
    title: "Injection Molding",
    img: img.productionLine,
    text: "Selected production capabilities for key toy categories and plastic components.",
  },
  {
    n: "02",
    title: "Assembly",
    img: img.assembly,
    text: "Process coordination for product assembly, packaging, and shipment readiness.",
  },
  {
    n: "03",
    title: "Quality Control",
    img: img.qualityControl,
    text: "Inspection support before production release and before final container loading.",
  },
  {
    n: "04",
    title: "Packaging",
    img: img.packaging,
    text: "Private label packaging, carton planning, and export-ready presentation.",
  },
];

const STEPS = ["Design", "Tooling", "Sampling", "Production", "QC", "Shipping"];

function ManufacturingPage() {
  return (
    <SiteLayout>
      <PageHero
        label="Manufacturing · OEM · ODM"
        title="From idea to shipment."
        subtitle="We support brands through design, tooling, sampling, production, inspection, packaging, and shipping."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:shadow-elevated"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 inline-flex size-9 items-center justify-center rounded-lg bg-white/95 text-xs font-bold text-navy-deep shadow">
                    {p.n}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Standard process flow
            </h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {STEPS.map((s, i) => (
                <div key={s} className="flex items-center gap-2 sm:gap-3">
                  <span className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground shadow-sm">
                    {s}
                  </span>
                  {i < STEPS.length - 1 ? (
                    <ArrowRight className="size-4 text-muted-foreground" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={img.qualityControl}
              alt="Quality control inspection"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionLabel>Quality Assurance</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Inspection support at every critical step.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We coordinate pre-production, in-line, and pre-shipment inspections, then verify
              packaging and loading before containers leave the factory.
            </p>
            <div className="mt-6">
              <CTAButton to="/contact" icon={<ArrowRight className="size-4" />}>
                Discuss your project
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <CertBadges />
    </SiteLayout>
  );
}
