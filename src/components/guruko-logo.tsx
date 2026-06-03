import { GURUKO_LOGO_URL } from "@/lib/brand";
import { cn } from "@/lib/utils";

type GurukoLogoProps = {
  className?: string;
};

export function GurukoLogo({ className }: GurukoLogoProps) {
  return (
    <img
      src={GURUKO_LOGO_URL}
      alt="Guruko"
      className={cn("object-contain", className)}
      width={36}
      height={36}
      decoding="async"
    />
  );
}
