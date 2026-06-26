import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

const COLS = [
  {
    title: "Company",
    items: [
      { label: "About Us", to: "/about" },
      { label: "Manufacturing", to: "/manufacturing" },
      { label: "China Sourcing", to: "/china-sourcing" },
      { label: "News", to: "/news" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "OEM / ODM", to: "/manufacturing" },
      { label: "Factory Coordination", to: "/china-sourcing" },
      { label: "Quality Control", to: "/manufacturing" },
      { label: "Export Support", to: "/china-sourcing" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex items-center rounded-2xl bg-white p-3 shadow-md">
              <Logo height={40} />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Toy manufacturing and sourcing partner based in Shantou, China. OEM / ODM
              solutions and end-to-end export support for international brands.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link
                      to={it.to}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 text-cyan" />
                <span>info@abero.example</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 text-cyan" />
                <span>WhatsApp: +86 000 0000 0000</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 size-4 text-cyan" />
                <span>WeChat: abero-id</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 text-cyan" />
                <span>Shantou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} ABERO. Manufacturing & sourcing partner. All rights reserved.
          </p>
          <p className="text-xs text-white/50">Shantou · China · World</p>
        </div>
      </div>
    </footer>
  );
}
