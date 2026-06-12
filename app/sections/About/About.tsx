"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import AboutCard from "./AboutCard";
import ExperienceCard from "./ExperienceCard";

export default function About() {
  return (
    <Section id="about">
      <Container>
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="max-w-3xl"
        >
          <span
            className="
            text-sky-500
            font-medium
          "
          >
            About Me
          </span>

          <h2
            className="
            mt-4
            text-5xl
            md:text-6xl
            font-black
            tracking-tight
          "
          >
            Engineering
            <span className="gradient-text">
              {" "}
              Solutions
            </span>

            <br />

            That Scale
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            dark:text-slate-400
          "
          >
            I specialize in building
            cloud-native applications,
            enterprise platforms,
            AI-powered systems,
            and scalable software
            architectures that support
            business growth.
          </p>
        </motion.div>

        {/* Bento Grid */}

        <div
          className="
          mt-20
          grid
          gap-6
          md:grid-cols-12
        "
        >
          {/* Main Bio */}

          <AboutCard
            title="Software Architecture"
            description="
            Designing resilient,
            scalable, and maintainable
            systems using modern
            architecture patterns,
            microservices, event-driven
            systems, and cloud-native
            technologies.
            "
            className="
            md:col-span-7
            min-h-[280px]
          "
          />

          {/* Industries */}

          <AboutCard
            title="Industries"
            description="
            FinTech, Real Estate,
            HealthTech, Logistics,
            E-commerce, SaaS,
            Enterprise Platforms.
            "
            className="
            md:col-span-5
          "
          />

          {/* Metrics */}

          <div
            className="
            md:col-span-4
            grid
            gap-6
          "
          >
            <ExperienceCard
              value="50+"
              label="Projects Delivered"
            />

            <ExperienceCard
              value="8+"
              label="Years Experience"
            />
          </div>

          {/* Specialization */}

          <AboutCard
            title="Specialization"
            description="
            Full-stack development,
            cloud engineering,
            DevOps automation,
            AI integrations,
            enterprise architecture,
            and digital transformation.
            "
            className="
            md:col-span-8
          "
          />
        </div>
      </Container>
    </Section>
  );
}