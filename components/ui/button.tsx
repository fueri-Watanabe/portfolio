import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50 disabled:pointer-events-none select-none tracking-tight";

    const variants = {
      default:
        "bg-gradient-to-r from-[#174668] to-[#286b8b] hover:from-[#123854] hover:to-[#205975] text-white shadow-md shadow-sky-950/15 hover:shadow-lg hover:shadow-sky-800/25 active:scale-95",
      primary:
        "bg-gradient-to-r from-[#1a4464] via-[#245e82] to-[#2d7396] hover:from-[#133752] hover:to-[#215a77] text-white font-semibold shadow-md shadow-sky-950/20 hover:shadow-xl hover:shadow-sky-600/30 hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-sky-50/80 hover:bg-sky-100 text-sky-950 border border-sky-200/70 shadow-sm active:scale-95",
      outline:
        "border border-sky-200/90 hover:border-sky-400 text-slate-800 hover:text-sky-950 bg-white hover:bg-sky-50/60 shadow-sm active:scale-95",
      ghost:
        "text-slate-600 hover:text-sky-950 hover:bg-sky-50/80 active:scale-95",
      glass:
        "bg-white/90 hover:bg-white text-slate-900 border border-sky-100 shadow-md hover:shadow-lg hover:border-sky-300 hover:shadow-sky-500/10 active:scale-95",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5",
      icon: "w-9 h-9 p-0 text-sm",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
