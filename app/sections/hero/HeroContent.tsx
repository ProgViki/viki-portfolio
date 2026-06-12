"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroContent() {
  return (
    <div className="space-y-6">
      <p className="text-blue-600 font-medium">
        Software Architect
      </p>

      <h1 className="text-6xl font-bold">
        Building Scalable
        Software Systems
      </h1>

      <TypeAnimation
        sequence={[
          "Cloud Engineering",
          2000,
          "AI Solutions",
          2000,
          "Full Stack Development",
          2000,
        ]}
        repeat={Infinity}
      />

      <motion.div
        whileHover={{ scale: 1.05 }}
      >
        <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl">
          Book Consultation
        </button>
      </motion.div>
    </div>
  );
}