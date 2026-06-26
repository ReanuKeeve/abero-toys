import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export function SectionLabel({ children, variant = "light", className }: SectionLabelProps) {
  return (
    <span className={cn(variant === "dark" ? "section-label-dark" : "section-label", className)}>
      <span
        aria-hidden
        className="inline-block size-1.5 rounded-full"
        style={{
          background: variant === "dark" ? "var(--cyan-accent)" : "var(--blue-accent)",
        }}
      />
      {children}
    </span>
  );
}
