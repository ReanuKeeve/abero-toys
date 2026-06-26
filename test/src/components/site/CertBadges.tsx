import { SectionLabel } from "./SectionLabel";

const CERTS = ["CE", "EN71", "ASTM", "CPC", "RoHS", "REACH", "BSCI", "ISO9001"];

export function CertBadges() {
  return (
    <section className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel variant="dark">Quality & Compliance Support</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            International toy safety & compliance references.
          </h2>
          <p className="mt-3 text-white/70">
            We support international toy safety and compliance requirements for export markets.
            Standards below are commonly referenced through partner factories and testing labs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {CERTS.map((c) => (
            <div
              key={c}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur-sm transition hover:border-cyan/40 hover:bg-white/[0.08]"
            >
              <span className="block text-base font-semibold tracking-wide text-white">{c}</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-cyan">
                compliance
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
