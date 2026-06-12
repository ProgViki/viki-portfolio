"use client";

import { motion } from "framer-motion";

import ProjectMetrics from "./ProjectMetrics";

interface Props {
  project: any;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="
      group
      overflow-hidden
      rounded-[40px]
      border
      border-white/10
      bg-white/60
      dark:bg-slate-900/60
      backdrop-blur-xl
      shadow-xl
    "
    >
      {/* IMAGE */}

      <div
        className="
        relative
        h-[300px]
        overflow-hidden
      "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
        />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          to-transparent
        "
        />
      </div>

      {/* CONTENT */}

      <div className="p-8">
        <span
          className="
          text-sm
          text-sky-500
          font-medium
        "
        >
          {project.category}
        </span>

        <h3
          className="
          mt-2
          text-3xl
          font-bold
        "
        >
          {project.title}
        </h3>

        <p
          className="
          mt-4
          text-slate-600
          dark:text-slate-400
        "
        >
          {project.description}
        </p>

        <ProjectMetrics
          metrics={project.impact}
        />

        {/* Tech Stack */}

        <div
          className="
          mt-8
          flex
          flex-wrap
          gap-2
        "
        >
          {project.technologies.map(
            (tech: string) => (
              <span
                key={tech}
                className="
                rounded-full
                border
                px-3
                py-1
                text-xs
              "
              >
                {tech}
              </span>
            )
          )}
        </div>

        <button
          className="
          mt-8
          font-medium
          text-sky-500
        "
        >
          View Case Study →
        </button>
      </div>
    </motion.div>
  );
}