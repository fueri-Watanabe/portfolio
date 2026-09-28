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
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors select-none tracking-tight";

  const variants = {
    default:
      "bg-sky-50/90 text-sky-900 border border-sky-200/80 shadow-sm",
    secondary:
      "bg-slate-100/90 text-slate-700 border border-slate-200/70 hover:bg-slate-200/70",
    outline:
      "border border-sky-300/80 text-sky-900 bg-white/80 backdrop-blur-sm",
    gradient:
      "bg-gradient-to-r from-sky-500/10 via-teal-500/10 to-emerald-500/10 text-sky-950 border border-teal-200/80 shadow-sm",
    glow:
      "bg-white/95 text-sky-950 border border-sky-200/90 shadow-[0_4px_16px_rgba(14,165,233,0.12)]",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
