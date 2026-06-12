"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import SkillCard from "./SkillCard";

export default function Competencies() {
  return (
    <Section id="competencies">
      <Container>
        {/* Header */}

        <div className="max-w-3xl">
          <span
            className="
            text-sky-500
            font-medium
          "
          >
            Core Expertise
          </span>

          <h2
            className="
            mt-4
            text-5xl
            md:text-6xl
            font-black
          "
          >
            Technical
            <span className="gradient-text">
              {" "}
              Competencies
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
            End-to-end software
            architecture, cloud-native
            engineering, AI systems,
            scalable backend services,
            and modern web platforms.
          </p>
        </div>

        {/* Bento Grid */}

        <div
          className="
          mt-20
          grid
          gap-6
          md:grid-cols-12
        "
        >
          {/* Architecture */}

          <SkillCard
            title="Software Architecture"
            description="
            Designing enterprise-grade
            systems using microservices,
            event-driven architecture,
            DDD, CQRS, and scalable
            patterns.
            "
            technologies={[
              "Microservices",
              "DDD",
              "CQRS",
              "Kafka",
              "RabbitMQ",
              "Event Sourcing",
            ]}
            className="
            md:col-span-7
            min-h-[300px]
          "
          />

          {/* Cloud */}

          <SkillCard
            title="Cloud Engineering"
            description="
            Building resilient,
            highly available cloud
            infrastructure.
            "
            technologies={[
              "AWS",
              "Azure",
              "Docker",
              "Kubernetes",
              "Terraform",
            ]}
            className="
            md:col-span-5
          "
          />

          {/* Backend */}

          <SkillCard
            title="Backend Systems"
            description="
            Designing APIs,
            distributed services,
            authentication systems,
            and high-performance
            business platforms.
            "
            technologies={[
              "NestJS",
              "Node.js",
              "Prisma",
              "PostgreSQL",
              "Redis",
            ]}
            className="
            md:col-span-4
          "
          />

          {/* Frontend */}

          <SkillCard
            title="Frontend Engineering"
            description="
            Creating premium user
            experiences using modern
            React ecosystems.
            "
            technologies={[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind",
              "Framer Motion",
            ]}
            className="
            md:col-span-4
          "
          />

          {/* AI */}

          <SkillCard
            title="AI & Automation"
            description="
            Building AI-powered
            applications, assistants,
            retrieval systems,
            workflows and business
            automation tools.
            "
            technologies={[
              "OpenAI",
              "RAG",
              "Agents",
              "LangChain",
              "Vector DBs",
            ]}
            className="
            md:col-span-4
          "
          />

          {/* Leadership */}

          <SkillCard
            title="Technical Leadership"
            description="
            Architecture reviews,
            team mentorship,
            technical strategy,
            engineering excellence,
            and scaling teams.
            "
            technologies={[
              "Mentoring",
              "Roadmaps",
              "Code Reviews",
              "Hiring",
              "Strategy",
            ]}
            className="
            md:col-span-12
            min-h-[240px]
          "
          />
        </div>
      </Container>
    </Section>
  );
}