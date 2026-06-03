import gurukoLogo from "@/assets/guruko-logo.png";
import { cn } from "@/lib/utils";

const sizeClasses = {
  xs: "w-7 h-7",
  sm: "w-9 h-9",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
  "2xl": "w-20 h-20",
  hero: "w-24 h-24 md:w-28 md:h-28",
} as const;

type GurukoLogoProps = {
  className?: string;
  size?: keyof typeof sizeClasses;
};

export function GurukoLogo({ className, size }: GurukoLogoProps) {
  return (
    <img
      src={gurukoLogo}
      alt="Guruko"
      className={cn("object-contain shrink-0", size ? sizeClasses[size] : undefined, className)}
      decoding="async"
      fetchPriority="high"
    />
  );
}

export { gurukoLogo as gurukoLogoUrl };
