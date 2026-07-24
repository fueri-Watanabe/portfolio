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
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:pointer-events-none select-none";

    const variants = {
      default:
        "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-95",
      primary:
        "bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 border border-slate-300/80 dark:border-slate-700/60 shadow-sm active:scale-95",
      outline:
        "border border-slate-300 dark:border-slate-700 hover:border-cyan-500/60 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 bg-white/60 dark:bg-slate-900/40 hover:bg-cyan-500/10 backdrop-blur-sm active:scale-95",
      ghost:
        "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 active:scale-95",
      glass:
        "bg-white/80 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800/80 text-slate-900 dark:text-white border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-lg hover:border-cyan-400/40 hover:shadow-cyan-500/10 active:scale-95",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 rounded-2xl",
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
