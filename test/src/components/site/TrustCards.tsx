import { Factory, ShieldCheck, Globe2, Boxes } from "lucide-react";

const cards = [
  {
    icon: Boxes,
    title: "OEM / ODM Support",
    text: "Custom development, tooling, and private label production for international brands.",
    accent: "from-brand to-violet-accent",
  },
  {
    icon: Factory,
    title: "1000+ Factories",
    text: "Curated supplier network across toy categories, plastics, plush, and accessories.",
    accent: "from-blue-accent to-cyan",
  },
  {
    icon: Globe2,
    title: "Export Support",
    text: "Documentation, packaging, inspection, and shipment coordination for global markets.",
    accent: "from-cyan to-blue-accent",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    text: "Pre-production, in-line, and pre-shipment inspection support before container loading.",
    accent: "from-violet-accent to-brand",
  },
];

export function TrustCards() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl bg-card p-5 shadow-card transition-all hover:shadow-elevated"
              >
                <div
                  className={`mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-md`}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
