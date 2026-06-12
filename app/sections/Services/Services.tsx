"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import ServiceCard from "./ServiceCard";
import { services } from "./services.data";

export default function Services() {
  return (
    <Section id="services">
      <Container>
        {/* Header */}

        <div className="max-w-3xl">
          <span
            className="
            text-sky-500
            font-medium
          "
          >
            Services
          </span>

          <h2
            className="
            mt-4
            text-5xl
            md:text-6xl
            font-black
          "
          >
            How I Can
            <span className="gradient-text">
              {" "}
              Help
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
            Whether you need technical
            leadership, software architecture,
            cloud transformation, or AI-powered
            solutions, I help organizations
            deliver scalable technology.
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
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}