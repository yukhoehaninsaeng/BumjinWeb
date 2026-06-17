import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gold text-midnight hover:bg-gold-light shadow-[0_0_20px_rgba(200,168,75,0.3)] hover:shadow-[0_0_30px_rgba(200,168,75,0.5)]",
        destructive:
          "bg-red-900 text-cream hover:bg-red-800",
        outline:
          "border border-charcoal-border bg-transparent text-cream hover:border-gold/50 hover:text-gold",
        secondary:
          "bg-charcoal text-cream hover:bg-charcoal-light",
        ghost:
          "text-cream-muted hover:text-cream hover:bg-charcoal/50",
        link:
          "text-gold underline-offset-4 hover:underline p-0 h-auto",
        electric:
          "bg-electric text-white hover:bg-electric-dark shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
        careers:
          "border border-gold/40 bg-gold/10 text-gold hover:bg-gold hover:text-midnight font-semibold tracking-widest uppercase text-xs shadow-[0_0_20px_rgba(200,168,75,0.15)] hover:shadow-[0_0_30px_rgba(200,168,75,0.4)] transition-all duration-300",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-sm px-4 text-xs",
        lg: "h-12 rounded-sm px-8 text-base",
        xl: "h-14 rounded-sm px-10 text-base tracking-wide",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
