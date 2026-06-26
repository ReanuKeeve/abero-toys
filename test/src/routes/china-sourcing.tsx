import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Network, Search, ClipboardList, Factory, Ship } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionLabel } from "@/components/site/SectionLabel";
import { CTAButton } from "@/components/site/CTAButton";
import { ImageCarousel } from "@/components/site/ImageCarousel";
import { gallerySlides, img } from "@/lib/site-images";

export const Route = createFileRoute("/china-sourcing")({
  head: () => ({
    meta: [
      { title: "China Sourcing Services — ABERO" },
      {
        name: "description",
        content:
          "Supplier search, order follow-up, factory coordination, and export preparation across 1000+ factories in China.",
      },
      { property: "og:title", content: "China Sourcing Services — ABERO" },
      { property: "og:url", content: "/china-sourcing" },
    ],
    links: [{ rel: "canonical", href: "/china-sourcing" }],
  }),
  component: ChinaSourcingPage,
});

const SOURCING = [
  {
    icon: Search,
    title: "Supplier Search",
    text: "Find suitable factories based on category, MOQ, compliance, and target price.",
  },
  {
    icon: ClipboardList,
    title: "Order Follow-up",
    text: "Manage samples, production updates, QC, and shipment coordination.",
  },
  {
    icon: Factory,
    title: "Factory Coordination",
    text: "Communicate with suppliers and coordinate practical production details.",
  },
  {
    icon: Ship,
    title: "Export Preparation",
    text: "Support packaging, inspection, documentation, and shipping readiness.",
  },
];

function ChinaSourcingPage() {
  return (
    <SiteLayout>
      <PageHero
        label="China Sourcing Services"
        title="Your China sourcing partner."
        subtitle="ABERO helps clients source products throughout China by connecting demand with suitable factories, practical quality control, and export-ready logistics."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-3 py-1.5 text-sm font-medium text-foreground">
              <Network className="size-4 text-blue-accent" />
              1000+ partner factories
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-3 py-1.5 text-sm font-medium text-foreground">
              Verified by ABERO
            </span>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {SOURCING.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:shadow-elevated"
                >
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-accent to-cyan text-white shadow-md">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionLabel>Network reach</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A vetted supplier network across categories.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Plastics, plush, electronic toys, vehicles, dolls, outdoor, educational, and seasonal
              categories — coordinated through one accountable partner in Shantou.
            </p>
            <div className="mt-6">
              <CTAButton to="/contact" icon={<ArrowRight className="size-4" />}>
                Start a sourcing brief
              </CTAButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={img.warehouse}
              alt="Export-ready warehouse"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Factory Gallery</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Photos that build trust.</h2>
          </div>
          <div className="mt-10 rounded-3xl bg-surface p-4 sm:p-6">
            <ImageCarousel slides={gallerySlides} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
