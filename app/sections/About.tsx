"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects" },
  { value: "8+", label: "Years" },
  { value: "10+", label: "Industries" },
  { value: "99.9%", label: "Uptime" },
];

export default function About() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold">
          About Me
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {stats.map((item) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={item.label}
              className="p-8 rounded-2xl border"
            >
              <h3 className="text-4xl font-bold">
                {item.value}
              </h3>

              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}