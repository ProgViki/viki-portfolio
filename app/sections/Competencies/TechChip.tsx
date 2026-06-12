"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
}

export default function TechChip({
  label,
}: Props) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
      }}
      className="
      rounded-full
      border
      border-sky-500/20
      bg-sky-500/5
      px-3
      py-2
      text-xs
      font-medium
      text-sky-600
      dark:text-sky-400
    "
    >
      {label}
    </motion.span>
  );
}