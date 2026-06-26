import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Sparkles, CheckCircle2, Play, Network } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { TrustCards } from "@/components/site/TrustCards";
import { SectionLabel } from "@/components/site/SectionLabel";
import { CTAButton } from "@/components/site/CTAButton";
import { ImageCarousel } from "@/components/site/ImageCarousel";
import { CertBadges } from "@/components/site/CertBadges";
import { ContactForm } from "@/components/site/ContactForm";
import { heroSlides, aboutSlides, gallerySlides, img } from "@/lib/site-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABERO — Toy Manufacturing & China Sourcing Partner" },
      {
        name: "description",
        content:
          "OEM/ODM toy solutions and China sourcing support for international brands, importers, distributors, and private label businesses.",
      },
      { property: "og:title", content: "ABERO — Toy Manufacturing & China Sourcing Partner" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const ABOUT_BULLETS = [
  "Showroom and product selection support",
  "Factory coordination and sample management",
  "Quality control before shipment",
  "OEM/ODM and private label support",
];

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

const SOURCING = [
  {
    title: "Supplier Search",
    text: "Find suitable factories based on category, MOQ, compliance, and target price.",
  },
  {
    title: "Order Follow-up",
    text: "Manage samples, production updates, QC, and shipment coordination.",
  },
  {
    title: "Factory Coordination",
    text: "Communicate with suppliers and coordinate practical production details.",
  },
  {
    title: "Export Preparation",
    text: "Support packaging, inspection, documentation, and shipping readiness.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 10%, color-mix(in oklab, var(--brand) 30%, transparent), transparent 70%), radial-gradient(45% 40% at 95% 20%, color-mix(in oklab, var(--cyan-accent) 25%, transparent), transparent 70%), radial-gradient(40% 50% at 60% 100%, color-mix(in oklab, var(--blue-accent) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur">
              <Sparkles className="size-3.5 text-cyan" />
              OEM · ODM · China Sourcing
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Toy Manufacturing &{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Sourcing Partner
              </span>
            </h1>
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
              <MapPin className="size-3.5" />
              Shantou · China · World
            </div>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              OEM / ODM toy solutions and China sourcing support for global brands, importers,
              distributors, and private label businesses.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton to="/contact" icon={<ArrowRight className="size-4" />}>
                Send Inquiry
              </CTAButton>
              <CTAButton to="/manufacturing" variant="outline-light">
                View Capabilities
              </CTAButton>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                { k: "1000+", v: "Factories" },
                { k: "20+", v: "Years export" },
                { k: "Global", v: "Markets" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-2xl font-semibold text-white">{s.k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-white/60">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <HeroCarousel slides={heroSlides} />
          </div>
        </div>
      </section>

      <TrustCards />

      {/* ABOUT */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel>About ABERO</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Manufacturing expertise with sourcing power.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Founded in Shantou, China, ABERO combines selected manufacturing capabilities with
                an extensive supplier network to provide complete toy solutions for importers,
                distributors, retail chains, e-commerce sellers, and private label brands.
              </p>
              <ul className="mt-6 space-y-3">
                {ABOUT_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-accent" />
                    <span className="text-base text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton to="/about" variant="ghost-dark" icon={<ArrowRight className="size-4" />}>
                  Learn about us
                </CTAButton>
              </div>
            </div>

            <div className="rounded-3xl bg-surface p-4 sm:p-6">
              <ImageCarousel slides={aboutSlides} />
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Manufacturing · OEM · ODM</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">From idea to shipment.</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              We support brands through design, tooling, sampling, production, inspection,
              packaging, and shipping.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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
      </section>

      {/* FACTORY VIDEO */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Factory Tour</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Show the complete process in 2–3 minutes.
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              A short factory tour video can show the office, showroom, production, warehouse,
              quality control, and container loading process.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={img.factoryExterior}
              alt="Factory tour video preview"
              width={1600}
              height={900}
              loading="lazy"
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-deep/55" />
            <button
              type="button"
              className="absolute inset-0 grid place-items-center text-white"
              aria-label="Play factory tour video"
            >
              <span className="grid size-20 place-items-center rounded-full bg-white text-navy-deep shadow-2xl transition hover:scale-105 sm:size-24">
                <Play className="ml-1 size-9 fill-current sm:size-10" />
              </span>
              <span className="absolute bottom-6 left-6 right-6 text-left sm:bottom-8 sm:left-8">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                  Factory Tour · Coming soon
                </span>
                <span className="mt-1 block text-lg font-semibold sm:text-xl">
                  Inside ABERO — production, QC, and export floor.
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* CHINA SOURCING */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 50% at 80% 10%, color-mix(in oklab, var(--cyan-accent) 22%, transparent), transparent 70%), radial-gradient(40% 40% at 10% 90%, color-mix(in oklab, var(--violet-accent) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <SectionLabel variant="dark">China Sourcing Services</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Your China sourcing partner.</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/75">
                ABERO helps clients source products throughout China by connecting product demand
                with suitable factories, practical quality control, and export-ready logistics.
              </p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-cyan">
                <Network className="size-4" />
                1000+ factories in our network
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {SOURCING.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition hover:bg-white/[0.07]"
                  >
                    <h3 className="text-base font-semibold text-white">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">{s.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <CTAButton to="/china-sourcing" variant="outline-light" icon={<ArrowRight className="size-4" />}>
                  Explore sourcing services
                </CTAButton>
              </div>
            </div>

            <SupplierNetworkGraphic />
          </div>
        </div>
      </section>

      <CertBadges />

      {/* FACTORY GALLERY */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Factory Gallery</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Photos that build trust.</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              A look at production, warehouse, showroom, quality control, and export operations.
            </p>
          </div>
          <div className="mt-10 rounded-3xl bg-surface p-4 sm:p-6">
            <ImageCarousel slides={gallerySlides} autoplayMs={3500} />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 50% at 15% 100%, color-mix(in oklab, var(--brand) 25%, transparent), transparent 70%), radial-gradient(50% 40% at 90% 0%, color-mix(in oklab, var(--blue-accent) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionLabel variant="dark">Contact Us</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Start your manufacturing or sourcing project.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Send us your product idea, target price, required quantity, market, and compliance
              requirements. Our team will help evaluate the best production or sourcing solution.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="https://wa.me/" variant="outline-light">
                WhatsApp
              </CTAButton>
              <CTAButton onClick={() => {}} variant="outline-light">
                WeChat QR
              </CTAButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white transition"
              >
                Or visit contact page
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}

function SupplierNetworkGraphic() {
  const nodes = [
    { x: 18, y: 28 },
    { x: 38, y: 16 },
    { x: 62, y: 22 },
    { x: 82, y: 36 },
    { x: 26, y: 60 },
    { x: 48, y: 72 },
    { x: 72, y: 64 },
    { x: 88, y: 78 },
  ];
  const center = { x: 50, y: 46 };
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-2 backdrop-blur-sm">
      <svg viewBox="0 0 100 100" className="size-full" aria-hidden>
        <defs>
          <radialGradient id="grad" cx="50%" cy="46%" r="60%">
            <stop offset="0%" stopColor="oklch(0.78 0.13 215)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="oklch(0.78 0.13 215)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={center.x} cy={center.y} r="44" fill="url(#grad)" />
        {[40, 30, 20, 10].map((r) => (
          <circle
            key={r}
            cx={center.x}
            cy={center.y}
            r={r}
            fill="none"
            stroke="oklch(1 0 0 / 0.08)"
            strokeWidth="0.3"
          />
        ))}
        {nodes.map((n, i) => (
          <line
            key={i}
            x1={center.x}
            y1={center.y}
            x2={n.x}
            y2={n.y}
            stroke="oklch(0.78 0.13 215 / 0.45)"
            strokeWidth="0.4"
            strokeDasharray="0.8 0.8"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={`n${i}`}>
            <circle cx={n.x} cy={n.y} r="2" fill="oklch(0.78 0.13 215)" />
            <circle
              cx={n.x}
              cy={n.y}
              r="3.5"
              fill="none"
              stroke="oklch(0.78 0.13 215 / 0.35)"
              strokeWidth="0.3"
            />
          </g>
        ))}
        <g>
          <circle cx={center.x} cy={center.y} r="5" fill="oklch(0.65 0.27 330)" />
          <circle
            cx={center.x}
            cy={center.y}
            r="8"
            fill="none"
            stroke="oklch(0.65 0.27 330 / 0.4)"
            strokeWidth="0.5"
          />
          <text
            x={center.x}
            y={center.y + 11}
            textAnchor="middle"
            fontSize="3.5"
            fontWeight="700"
            fill="white"
          >
            ABERO
          </text>
        </g>
      </svg>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/70">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-brand" /> ABERO HQ
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-cyan" /> Partner factories
        </span>
      </div>
    </div>
  );
}
