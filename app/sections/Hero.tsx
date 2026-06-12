"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden hero-bg">
      {/* Glow */}

      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="min-h-screen grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span
                className="
                inline-flex
                rounded-full
                border
                px-4
                py-2
                text-sm
              "
              >
                Software Architect • AI Consultant
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 40
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: .7
              }}
              className="
                mt-8
                text-6xl
                lg:text-8xl
                font-black
                leading-none
              "
            >
              Building
              <br />

              <span className="gradient-text">
                Scalable
              </span>

              <br />

              Digital Products
            </motion.h1>

            <p
              className="
              mt-8
              text-xl
              text-slate-500
              max-w-xl
            "
            >
              I help startups and enterprises
              design cloud-native systems,
              AI platforms, SaaS products,
              and enterprise architectures.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                className="
                  bg-[#007ACC]
                  hover:bg-[#0060a6]
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                "
              >
                Hire Me
              </button>

              <button
                className="
                  border
                  px-8
                  py-4
                  rounded-2xl
                "
              >
                View Projects
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              <Stat
                value="50+"
                label="Projects"
              />

              <Stat
                value="8+"
                label="Years"
              />

              <Stat
                value="10+"
                label="Industries"
              />
            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <motion.div
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 6
              }}
              className="
              h-[500px]
              rounded-[40px]
              border
              backdrop-blur-xl
              bg-white/5
              shadow-2xl
            "
            >
              <div className="p-10">
                <h3 className="font-bold text-xl">
                  Enterprise Architecture
                </h3>

                <div className="mt-10 space-y-6">

                  <Node title="API Gateway" />

                  <Node title="Auth Service" />

                  <Node title="User Service" />

                  <Node title="AI Service" />

                  <Node title="Notification Service" />

                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <h3 className="text-4xl font-bold gradient-text">
        {value}
      </h3>

      <p className="text-slate-500">
        {label}
      </p>
    </div>
  );
}

function Node({
  title
}: {
  title: string;
}) {
  return (
    <div
      className="
      rounded-xl
      border
      p-4
      hover:border-sky-500
      transition-all
    "
    >
      {title}
    </div>
  );
}