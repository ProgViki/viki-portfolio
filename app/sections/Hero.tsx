"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Briefcase, Sparkles, Shield, Zap, Layers, GitBranch, Database, Server } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden hero-bg pt-20 lg:pt-28">
      {/* Glows */}
      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />

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
        <div className="min-h-[calc(100vh-6rem)] grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - Personal Introduction */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-sky-500/20
                  px-4
                  py-2
                  text-sm
                  bg-sky-500/10
                  text-sky-600
                  dark:text-sky-400
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Senior Node.js Architect
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                mt-8
                text-5xl
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
                font-black
                leading-none
                text-gray-900
                dark:text-white
              "
            >
              Building
              <br />
              <span className="gradient-text">
                Scalable
              </span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                Digital Products
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="
                mt-8
                text-lg
                sm:text-xl
                text-gray-600
                dark:text-gray-300
                max-w-xl
                leading-relaxed
              "
            >
              I help startups and enterprises design cloud-native systems,
              scalable microservices, AI platforms, and resilient
              enterprise architectures that drive business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="
                  group
                  bg-gradient-to-r
                  from-[#007ACC]
                  to-[#10B981]
                  hover:shadow-lg
                  hover:scale-105
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                "
              >
                Hire Me
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#portfolio"
                className="
                  border-2
                  border-[#007ACC]
                  text-[#007ACC]
                  dark:text-sky-400
                  hover:bg-[#007ACC]
                  hover:text-white
                  dark:hover:text-white
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              <Stat value="10+" label="Years Experience" />
              <Stat value="50+" label="Projects Delivered" />
              <Stat value="99.9%" label="Uptime Achieved" />
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#007ACC]" />
                <span className="text-sm font-medium">AWS Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#10B981]" />
                <span className="text-sm font-medium">Team Lead</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#007ACC]" />
                <span className="text-sm font-medium">Enterprise Expert</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - Enterprise Architecture Card */}
          <div className="relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="
                h-[500px]
                rounded-[40px]
                border
                border-gray-200
                dark:border-gray-700
                backdrop-blur-xl
                bg-white/80
                dark:bg-gray-800/80
                shadow-2xl
                overflow-hidden
              "
            >
              {/* Card Header with Gradient */}
              <div className="h-20 bg-gradient-to-r from-[#007ACC] to-[#10B981] flex items-center px-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      Enterprise Architecture
                    </h3>
                    <p className="text-white/70 text-xs">Node.js Microservices Stack</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-white/70 text-xs">Live</span>
                </div>
              </div>

              {/* Architecture Nodes */}
              <div className="p-6 space-y-3">
                <Node 
                  title="API Gateway" 
                  icon={<Shield className="w-4 h-4" />}
                  description="NestJS + GraphQL"
                  color="from-[#007ACC] to-[#10B981]"
                />
                <Node 
                  title="Auth Service" 
                  icon={<Shield className="w-4 h-4" />}
                  description="JWT + OAuth2"
                  color="from-[#007ACC] to-[#10B981]"
                />
                <Node 
                  title="User Service" 
                  icon={<Users className="w-4 h-4" />}
                  description="PostgreSQL + Redis"
                  color="from-[#007ACC] to-[#10B981]"
                />
                <Node 
                  title="AI Service" 
                  icon={<Sparkles className="w-4 h-4" />}
                  description="OpenAI + LangChain"
                  color="from-[#007ACC] to-[#10B981]"
                />
                <Node 
                  title="Notification Service" 
                  icon={<Zap className="w-4 h-4" />}
                  description="Kafka + WebSocket"
                  color="from-[#007ACC] to-[#10B981]"
                />
              </div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4"
            >
              <div className="px-4 py-2 bg-gradient-to-r from-[#10B981] to-[#007ACC] rounded-full shadow-lg">
                <p className="text-xs font-bold text-white">Enterprise Ready</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 -left-4"
            >
              <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#007ACC] to-[#10B981] flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold">N</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#10B981] to-[#007ACC] flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold">JS</span>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Node.js Expert</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <h3 className="text-3xl sm:text-4xl font-bold gradient-text">
        {value}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  );
}

function Node({ 
  title, 
  icon, 
  description,
  color 
}: { 
  title: string; 
  icon: React.ReactNode;
  description: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, x: 8 }}
      className="
        rounded-xl
        border
        border-gray-200
        dark:border-gray-700
        p-4
        hover:border-sky-500
        dark:hover:border-sky-500
        transition-all
        duration-300
        cursor-pointer
        bg-white/50
        dark:bg-gray-800/50
        hover:shadow-lg
        group
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`
            p-2 
            rounded-lg 
            bg-gradient-to-r 
            ${color}
            text-white
            group-hover:scale-110
            transition-transform
            duration-300
          `}>
            {icon}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
              {title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-[#007ACC]/10 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-[#007ACC]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}