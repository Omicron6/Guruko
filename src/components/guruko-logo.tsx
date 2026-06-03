import { GURUKO_LOGO_LIGHT_URL, GURUKO_LOGO_URL } from "@/lib/brand";
import { cn } from "@/lib/utils";

type GurukoLogoProps = {
  className?: string;
  /** Use on gradient/dark backgrounds (no tile behind the mark). */
  variant?: "default" | "light";
};

export function GurukoLogo({ className, variant = "default" }: GurukoLogoProps) {
  return (
    <img
      src={variant === "light" ? GURUKO_LOGO_LIGHT_URL : GURUKO_LOGO_URL}
      alt="Guruko"
      className={cn("object-contain", className)}
      width={variant === "light" ? 48 : 36}
      height={variant === "light" ? 48 : 36}
      decoding="async"
    />
  );
}
