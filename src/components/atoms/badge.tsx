import { BadgeProps } from "@/lib/types/interface";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "badge_variants",
  {
    variants: {
      variant: {
        subtle: "badge_subtle",
        secondary: "badge_secondary",
        primary: "badge_primary",
      },
    },
    defaultVariants: {
      variant: "subtle",
    },
  }
);

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };