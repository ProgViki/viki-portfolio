"use client";

import { motion } from "framer-motion";
import ServiceFeature from "./ServiceFeature";

interface Props {
  service: any;
}

export default function ServiceCard({
  service,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className={`
      relative
      overflow-hidden
      rounded-[40px]
      border
      backdrop-blur-xl
      p-8
      shadow-xl

      ${
        service.featured
          ? `
          border-sky-500
          bg-gradient-to-br
          from-sky-500/10
          to-emerald-500/10
          scale-[1.02]
          `
          : `
          border-white/10
          bg-white/60
          dark:bg-slate-900/60
          `
      }
    `}
    >
      {service.featured && (
        <div
          className="
          absolute
          right-6
          top-6
          rounded-full
          bg-sky-500
          px-3
          py-1
          text-xs
          font-medium
          text-white
        "
        >
          Most Popular
        </div>
      )}

      <h3
        className="
        text-3xl
        font-black
        mb-4
      "
      >
        {service.title}
      </h3>

      <p
        className="
        text-slate-600
        dark:text-slate-400
      "
      >
        {service.description}
      </p>

      <div
        className="
        mt-8
        space-y-4
      "
      >
        {service.features.map(
          (feature: string) => (
            <ServiceFeature
              key={feature}
              text={feature}
            />
          )
        )}
      </div>

      <div
        className="
        mt-8
        rounded-2xl
        border
        border-white/10
        p-4
      "
      >
        <p
          className="
          text-sm
          text-slate-500
        "
        >
          Deliverable
        </p>

        <p className="mt-2 font-medium">
          {service.deliverable}
        </p>
      </div>

      <button
        className="
        mt-8
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-sky-500
        to-emerald-500
        py-4
        font-medium
        text-white
      "
      >
        Book Discovery Call
      </button>
    </motion.div>
  );
}