import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
      rounded-[32px]
      border
      border-white/10
      bg-white/50
      dark:bg-slate-900/50
      backdrop-blur-xl
      shadow-xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      ${className}
    `}
    >
      {children}
    </div>
  );
}