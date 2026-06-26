import logoAsset from "@/assets/abero-logo.asset.json";

interface LogoProps {
  className?: string;
  /** rendered height in pixels */
  height?: number;
}

/**
 * ABERO logo. Uses the uploaded logo asset.
 * Preserves natural aspect ratio (the source is a wide pill mark).
 */
export function Logo({ className, height = 48 }: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt="ABERO"
      className={className}
      style={{ height, width: "auto", display: "block" }}
      decoding="async"
    />
  );
}
