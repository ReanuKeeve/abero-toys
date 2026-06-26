import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="rounded-2xl bg-card p-6 shadow-elevated sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setSubmitted(true);
        }, 700);
      }}
    >
      <h3 className="text-xl font-semibold text-foreground">Send an inquiry</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Share your project details. Our team will reply with the best production or sourcing path.
      </p>

      {submitted ? (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
          <div className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-white">
            <Check className="size-5" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Inquiry received.</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Thank you — our team will reach out within 1 business day.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Company" name="company" className="sm:col-span-2" />
          <Field
            label="Project Details"
            name="details"
            multiline
            required
            placeholder="Category, target price, MOQ, market, compliance requirements…"
            className="sm:col-span-2"
          />
          <div className="sm:col-span-2">
            <CTAButton
              type="submit"
              icon={<ArrowRight className="size-4" />}
              className="w-full sm:w-auto"
            >
              {loading ? "Sending…" : "Send Inquiry"}
            </CTAButton>
          </div>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  multiline,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  placeholder?: string;
  className?: string;
}) {
  const baseInput =
    "mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 transition";
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-sm font-medium text-foreground">
        {label}
        {required ? <span className="ml-0.5 text-brand">*</span> : null}
      </span>
      {multiline ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          className={baseInput}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseInput}
        />
      )}
    </label>
  );
}