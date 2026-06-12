"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold"
        >
          Building Scalable Software
        </motion.h1>

        <p className="mt-6 text-xl text-gray-500">
          Software Architect, Cloud Engineer,
          AI Consultant
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl">
            Hire Me
          </button>

          <button className="border px-8 py-4 rounded-xl">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}