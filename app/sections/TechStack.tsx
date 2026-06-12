"use client";

import Marquee from "react-fast-marquee";

export default function TechStack() {
  return (
    <section className="py-12 border-y">
      <Marquee speed={50}>
        React • Next.js • TypeScript •
        NestJS • AWS • Docker •
        Kubernetes • PostgreSQL •
        Redis • OpenAI • GraphQL •
      </Marquee>
    </section>
  );
}