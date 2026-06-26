import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ImageCarousel } from "@/components/site/ImageCarousel";
import { CertBadges } from "@/components/site/CertBadges";
import { aboutSlides, img } from "@/lib/site-images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ABERO" },
      {
        name: "description",
        content:
          "ABERO combines selected manufacturing with an extensive supplier network in China to deliver complete toy solutions for global brands.",
      },
      { property: "og:title", content: "About Us — ABERO" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Practical execution",
    text: "We focus on what ships: clear samples, controlled production, and verified inspections.",
  },
  {
    title: "Curated network",
    text: "Selected factories across toy categories, plastics, plush, electronics, and accessories.",
  },
  {
    title: "Export-ready",
    text: "Documentation, packaging, and logistics designed for retail and e-commerce buyers.",
  },
];

const BULLETS = [
  "Showroom and product selection support",
  "Factory coordination and sample management",
  "Quality control before shipment",
  "OEM/ODM and private label support",
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        label="About ABERO"
        title="Manufacturing expertise with sourcing power."
        subtitle="Founded in Shantou, China — combining selected manufacturing capabilities with an extensive supplier network for international brands."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>Who we are</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                A China-based partner built for export.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                ABERO supports importers, distributors, retail chains, e-commerce sellers, and
                private label brands. We combine production capability with a vetted supplier base
                to deliver complete toy solutions end to end.
              </p>
              <ul className="mt-6 space-y-3">
                {BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-accent" />
                    <span className="text-base text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={img.office}
                alt="ABERO team and office"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-16 rounded-3xl bg-surface p-4 sm:p-6">
            <ImageCarousel slides={aboutSlides} />
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertBadges />
    </SiteLayout>
  );
}
