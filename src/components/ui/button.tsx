import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        green: "bg-green-400 text-black hover:bg-green-600 text-center",
        outline: "border border-green-500 text-green-500 bg-transparent hover:bg-transparent hover:text-white ", // Outline version
      },
      size: {
        default: "h-[44px] px-6 py-2",
        md: "h-[48px] px-6 py-2",
        lg: "-[56px] px-8  uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "green",
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
