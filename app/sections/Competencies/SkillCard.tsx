"use client";

import { motion } from "framer-motion";
import TechChip from "./TechChip";

interface SkillCardProps {
  title: string;
  description: string;
  technologies: string[];
  className?: string;
}

export default function SkillCard({
  title,
  description,
  technologies,
  className = "",
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
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
        transition-all
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
        "
        >
          {title}
        </h3>

        <p
          className="
          mt-4
          text-slate-600
          dark:text-slate-400
        "
        >
          {description}
        </p>

        <div
          className="
          mt-6
          flex
          flex-wrap
          gap-2
        "
        >
          {technologies.map((tech) => (
            <TechChip
              key={tech}
              label={tech}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}