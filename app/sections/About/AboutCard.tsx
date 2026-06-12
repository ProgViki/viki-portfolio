"use client";

import { motion } from "framer-motion";

interface AboutCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function AboutCard({
  title,
  description,
  className = "",
}: AboutCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/60
        dark:bg-slate-900/60
        backdrop-blur-xl
        p-8
        shadow-xl
        ${className}
      `}
    >
      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        bg-gradient-to-br
        from-sky-500/10
        to-emerald-500/10
      "
      />

      <div className="relative z-10">
        <h3
          className="
          text-2xl
          font-bold
          mb-4
        "
        >
          {title}
        </h3>

        <p
          className="
          text-slate-600
          dark:text-slate-400
          leading-relaxed
        "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}