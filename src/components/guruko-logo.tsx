import { GURUKO_LOGO_URL } from "@/lib/brand";
import { cn } from "@/lib/utils";

type GurukoLogoProps = {
  className?: string;
};

export function GurukoLogo({ className = "w-9 h-9" }: GurukoLogoProps) {
  return (
    <img
      src={GURUKO_LOGO_URL}
      alt="Guruko"
      className={cn("object-contain shrink-0", className)}
      decoding="async"
    />
  );
}
