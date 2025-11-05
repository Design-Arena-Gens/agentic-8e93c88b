"use client";

import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "relative overflow-hidden rounded-full border border-white/15 bg-white/15 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-15px_rgba(79,209,197,0.9)] backdrop-blur-lg transition hover:border-white/30 hover:bg-white/20",
  glow: "relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-slate-900 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
  ghost:
    "rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 backdrop-blur-lg transition hover:border-white/30 hover:text-white",
};

const glowBg =
  "before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_30%_120%,rgba(94,234,212,0.9),rgba(56,189,248,0.8),rgba(59,130,246,0.75))] before:opacity-90 before:transition before:duration-500 hover:before:scale-[1.05]";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: keyof typeof variants;
  size?: "default" | "icon";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={cn(
          variants[variant],
          variant === "glow" && glowBg,
          size === "icon" && "h-11 w-11 px-0",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
