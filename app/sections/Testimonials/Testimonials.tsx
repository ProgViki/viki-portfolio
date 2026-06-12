"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonials.data";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <div className="max-w-3xl">
          <span
            className="
            text-sky-500
            font-medium
          "
          >
            Testimonials
          </span>

          <h2
            className="
            mt-4
            text-5xl
            md:text-6xl
            font-black
          "
          >
            Trusted By
            <span className="gradient-text">
              {" "}
              Leaders
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
            Organizations and founders
            trust me to solve complex
            technical challenges and
            deliver scalable systems.
          </p>
        </div>

        <div
          className="
          mt-20
          grid
          gap-8
          lg:grid-cols-3
        "
        >
          {testimonials.map(
            (testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            )
          )}
        </div>
      </Container>
    </Section>
  );
}