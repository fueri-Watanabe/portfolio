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
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400 disabled:opacity-50 disabled:pointer-events-none select-none tracking-tight";

    const variants = {
      default:
        "bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-500 text-white shadow-sm shadow-violet-500/20 hover:shadow-md hover:shadow-violet-500/30 active:scale-95",
      primary:
        "bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-500 text-white font-semibold shadow-glass hover:shadow-glass-hover hover:shadow-violet-500/25 hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-slate-100/90 hover:bg-slate-200/90 text-slate-700 border border-slate-200/80 shadow-xs active:scale-95",
      outline:
        "border border-slate-200/90 hover:border-violet-300 text-slate-700 hover:text-violet-700 bg-white hover:bg-violet-50/40 shadow-xs active:scale-95",
      ghost:
        "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 active:scale-95",
      glass:
        "bg-white/90 hover:bg-white text-slate-700 border border-slate-200/80 shadow-xs hover:border-violet-300 hover:text-violet-700 active:scale-95 backdrop-blur-md",
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
