"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        {/* Header */}

        <div className="max-w-3xl">
          <span
            className="
            text-sky-500
            font-medium
          "
          >
            Featured Work
          </span>

          <h2
            className="
            mt-4
            text-5xl
            md:text-6xl
            font-black
          "
          >
            Projects &
            <span className="gradient-text">
              {" "}
              Case Studies
            </span>
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            dark:text-slate-400
          "
          >
            A collection of systems,
            platforms, products, and
            digital experiences built
            to solve complex business
            challenges and drive growth.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          mt-20
          grid
          gap-8
          lg:grid-cols-2
        "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}