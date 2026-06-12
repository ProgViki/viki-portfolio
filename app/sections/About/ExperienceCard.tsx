"use client";

import { motion } from "framer-motion";

interface Props {
  value: string;
  label: string;
}

export default function ExperienceCard({
  value,
  label,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="
      rounded-[28px]
      border
      border-white/10
      bg-gradient-to-br
      from-sky-500/10
      to-emerald-500/10
      p-6
      backdrop-blur-xl
    "
    >
      <h3
        className="
        text-5xl
        font-black
        gradient-text
      "
      >
        {value}
      </h3>

      <p
        className="
        mt-2
        text-slate-500
      "
      >
        {label}
      </p>
    </motion.div>
  );
}