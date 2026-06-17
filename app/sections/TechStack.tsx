"use client";

import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  // SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiOpenai,
  SiGraphql,
} from "react-icons/si";
import { FaAmazon } from "react-icons/fa"

const techItems = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "AWS", icon: FaAmazon, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "OpenAI", icon: SiOpenai, color: "#412991" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
];

export default function TechStack() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-y-2 border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Technologies I work with
          </p>
        </div>

        {/* Marquee with Icons */}
        <div className="relative flex items-center h-24">
          <Marquee
            speed={50}
            gradient={true}
            gradientColor={"#f9fafb"}
            gradientWidth={80}
            className="py-6 overflow-y-hidden"
          >
            {techItems.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mx-12 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <tech.icon
                  className="text-2xl"
                  style={{ color: tech.color }}
                />
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Gradient Overlays for smooth fade effect */}
        <style jsx>{`
          .marquee-container {
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
          }
        `}</style>
      </div>
    </section>
  );
}