import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "gradient" | "glow" | "secondary" | "teal" | "sky";
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
      "bg-slate-100 text-slate-700 border border-slate-200/90 shadow-xs",
    secondary:
      "bg-slate-50 text-slate-600 border border-slate-200/80 hover:bg-slate-100/80",
    outline:
      "border border-slate-200/90 text-slate-700 bg-white/90 backdrop-blur-sm",
    gradient:
      "bg-gradient-to-r from-violet-50 to-cyan-50 text-violet-800 border border-violet-200/80 shadow-xs",
    glow:
      "bg-violet-50/80 text-violet-800 border border-violet-200/80 shadow-2xs",
    teal:
      "bg-cyan-50 text-cyan-800 border border-cyan-200/80 shadow-xs",
    sky:
      "bg-sky-50 text-sky-800 border border-sky-200/80 shadow-xs",
    cyan:
      "bg-cyan-50 text-cyan-800 border border-cyan-200/80 shadow-xs",
    violet:
      "bg-violet-50 text-violet-800 border border-violet-200/80 shadow-xs",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
