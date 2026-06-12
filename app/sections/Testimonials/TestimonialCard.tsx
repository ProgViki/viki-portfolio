"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Props {
  testimonial: any;
}

export default function TestimonialCard({
  testimonial,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="
      relative
      overflow-hidden
      rounded-[36px]
      border
      border-white/10
      bg-white/60
      dark:bg-slate-900/60
      backdrop-blur-xl
      p-8
      shadow-xl
    "
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        hover:opacity-100
        transition-all
        duration-500
        bg-gradient-to-br
        from-sky-500/10
        to-emerald-500/10
      "
      />

      <div className="relative z-10">
        <Quote
          size={40}
          className="
          text-sky-500
          mb-6
        "
        />

        <p
          className="
          text-lg
          leading-relaxed
        "
        >
          "{testimonial.quote}"
        </p>

        <div
          className="
          mt-8
          rounded-2xl
          bg-emerald-500/10
          p-4
        "
        >
          <p
            className="
            text-sm
            text-emerald-600
            font-medium
          "
          >
            Result
          </p>

          <p
            className="
            mt-1
            font-semibold
          "
          >
            {testimonial.result}
          </p>
        </div>

        <div className="mt-8">
          <h4 className="font-bold">
            {testimonial.name}
          </h4>

          <p
            className="
            text-slate-500
            text-sm
          "
          >
            {testimonial.role} ·{" "}
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}