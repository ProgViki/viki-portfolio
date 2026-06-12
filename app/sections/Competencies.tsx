"use client";

import Tilt from "react-parallax-tilt";

const cards = [
  {
    title: "Architecture",
    desc: "Microservices, DDD"
  },
  {
    title: "Cloud",
    desc: "AWS, Docker"
  },
  {
    title: "Backend",
    desc: "NestJS, Node"
  },
  {
    title: "Frontend",
    desc: "React, Next"
  },
  {
    title: "AI",
    desc: "RAG, Agents"
  }
];

export default function Competencies() {
  return (
    <section className="py-32">
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Tilt
            key={card.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <div className="rounded-3xl border p-8 h-full">
              <h3 className="text-2xl font-bold">
                {card.title}
              </h3>

              <p className="mt-3">
                {card.desc}
              </p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}