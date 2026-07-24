import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "gradient" | "glow" | "secondary";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 select-none";

  const variants = {
    default:
      "bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-400 border border-slate-200 dark:border-slate-700/60 shadow-inner",
    secondary:
      "bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/50 hover:bg-slate-200/80 dark:hover:bg-slate-700/80",
    outline:
      "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 backdrop-blur-sm",
    gradient:
      "bg-gradient-to-r from-cyan-500/15 via-teal-500/15 to-indigo-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30",
    glow:
      "bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
