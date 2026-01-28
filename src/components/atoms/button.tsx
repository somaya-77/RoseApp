import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { ButtonProps } from "@/lib/types/interface";


const buttonVariants = cva(
  "variant_btn",
  {
    variants: {
      variant: {
        primary: "primary_btn",
        secondary: "secondary_btn",
        outline: "outline_btn",
        subtle: "subtle_btn",
        ghost: "ghost_btn",
        destructive: "destructive_btn",
      },
      size: {
        default: "px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      state: {
        loading:
          "h-4 w-4 bg-zinc-300 text-zinc-500 dark:bg-zinc-600 dark:text-zinc-400",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      state,
      asChild = false,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, state, className }))}
        disabled={loading || props.disabled}
        {...props}
      >
        {children}
        {loading && <Loader2 className="animate-spin" />}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };