import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { NewsCard, type NewsItem } from "@/components/site/NewsCard";
import { Modal } from "@/components/site/Modal";
import { ImageCarousel } from "@/components/site/ImageCarousel";
import { img } from "@/lib/site-images";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Exhibitions — ABERO" },
      {
        name: "description",
        content:
          "Meet ABERO at global toy fairs — Hong Kong Toys & Games Fair, Canton Fair, Nuremberg, and more.",
      },
      { property: "og:title", content: "News & Exhibitions — ABERO" },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

const ITEMS: NewsItem[] = [
  {
    id: "hk",
    title: "Hong Kong Toys & Games Fair",
    description:
      "A major international toy industry event where brands, manufacturers, and buyers explore new product opportunities.",
    image: img.exhibition,
    meta: "January · Hong Kong",
    gallery: [img.exhibition, img.showroom, img.office, img.assembly],
  },
  {
    id: "canton",
    title: "Canton Fair",
    description:
      "A large trade fair connecting Chinese manufacturers and global buyers across many product categories.",
    image: img.showroom,
    meta: "Spring & Autumn · Guangzhou",
    gallery: [img.showroom, img.exhibition, img.warehouse, img.productionLine],
  },
  {
    id: "nuremberg",
    title: "Nuremberg Toy Fair",
    description:
      "An international toy industry event focused on product trends, sourcing, and global market development.",
    image: img.office,
    meta: "February · Nuremberg",
    gallery: [img.office, img.exhibition, img.showroom, img.qualityControl],
  },
  {
    id: "updates",
    title: "Company Updates",
    description:
      "Updates from ABERO's showroom, product development, sourcing work, and client support activities.",
    image: img.productionLine,
    meta: "Ongoing",
    gallery: [img.productionLine, img.assembly, img.packaging, img.containerLoading],
  },
];

function NewsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = ITEMS.find((i) => i.id === openId) ?? null;

  return (
    <SiteLayout>
      <PageHero
        label="News & Exhibitions"
        title="Meet ABERO at global toy fairs."
        subtitle="We participate in major international trade fairs to connect with brands, importers, and distributors worldwide."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item) => (
              <NewsCard key={item.id} item={item} onOpen={setOpenId} />
            ))}
          </div>
        </div>
      </section>

      <Modal open={!!active} onClose={() => setOpenId(null)} title={active?.title ?? ""}>
        {active ? (
          <div>
            {active.meta ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-accent">
                {active.meta}
              </p>
            ) : null}
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {active.description}
            </p>
            <div className="mt-6 rounded-2xl bg-surface p-3 sm:p-4">
              <ImageCarousel
                slides={active.gallery.map((src) => ({ src }))}
                drum={false}
                autoplayMs={3500}
              />
            </div>
          </div>
        ) : null}
      </Modal>
    </SiteLayout>
  );
}
