import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: React.ReactNode;
  variant?: "brand" | "outline-light" | "ghost-dark";
  className?: string;
  icon?: React.ReactNode;
};

type AsLink = CommonProps & { to: string; href?: never; onClick?: never };
type AsAnchor = CommonProps & { href: string; to?: never; onClick?: never };
type AsButton = CommonProps & { onClick?: () => void; to?: never; href?: never; type?: "button" | "submit" };

type Props = AsLink | AsAnchor | AsButton;

function variantClasses(variant: CommonProps["variant"]) {
  switch (variant) {
    case "outline-light":
      return "btn-outline-light btn-outline-light-hover";
    case "ghost-dark":
      return "inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-5 py-3 border border-border bg-card text-foreground hover:bg-surface-2 transition";
    case "brand":
    default:
      return "btn-brand btn-brand-hover";
  }
}

export function CTAButton(props: Props) {
  const { children, variant = "brand", className, icon } = props;
  const classes = cn(variantClasses(variant), className);

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={classes} target="_blank" rel="noreferrer">
        {children}
        {icon}
      </a>
    );
  }
  return (
    <button
      type={(props as AsButton).type ?? "button"}
      onClick={(props as AsButton).onClick}
      className={classes}
    >
      {children}
      {icon}
    </button>
  );
}