import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABERO" },
      {
        name: "description",
        content:
          "Start your manufacturing or sourcing project with ABERO. Based in Shantou, China — serving brands worldwide.",
      },
      { property: "og:title", content: "Contact — ABERO" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        label="Contact Us"
        title="Start your manufacturing or sourcing project."
        subtitle="Send us your product idea, target price, required quantity, market, and compliance requirements. Our team will help evaluate the best production or sourcing solution."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
          <div>
            <div className="space-y-4">
              <ContactItem
                icon={<Mail className="size-5" />}
                title="Email"
                value="info@abero.example"
              />
              <ContactItem
                icon={<Phone className="size-5" />}
                title="WhatsApp"
                value="+86 000 0000 0000"
              />
              <ContactItem
                icon={<MessageCircle className="size-5" />}
                title="WeChat"
                value="abero-id"
              />
              <ContactItem
                icon={<MapPin className="size-5" />}
                title="Headquarters"
                value="Shantou, China"
              />
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-accent">
                Office hours
              </p>
              <p className="mt-2 text-base text-foreground">
                Monday – Saturday · 09:00 – 18:00 (GMT+8)
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Inquiries are typically answered within one business day.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-accent to-cyan text-white">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </p>
        <p className="mt-1 truncate text-base font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}
