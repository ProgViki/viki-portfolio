"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Code2, Server, Database, Cloud, Shield, Zap, Layers, GitBranch, Award, Briefcase, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }> = [];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = "rgba(0, 122, 204, 0.15)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Subtle Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#007ACC]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Personal Introduction */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007ACC]/10 dark:bg-[#007ACC]/20 rounded-full border border-[#007ACC]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-sm font-medium text-[#007ACC] dark:text-[#60A5FA]">
                Senior Node.js Architect
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm
                <span className="block mt-2 bg-gradient-to-r from-[#007ACC] to-[#10B981] bg-clip-text text-transparent">
                  John Doe
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Enterprise Node.js architect specializing in building scalable, 
                resilient systems with microservices, cloud-native solutions, 
                and cutting-edge technologies.
              </p>
            </div>

            {/* Personal Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#007ACC]">10+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#10B981]">50+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#007ACC]">99.9%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Uptime Achieved</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#portfolio"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#007ACC] to-[#10B981] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View My Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#007ACC] text-[#007ACC] dark:text-[#60A5FA] font-semibold rounded-full transition-all duration-300 hover:bg-[#007ACC] hover:text-white dark:hover:text-white"
              >
                Let's Connect
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 text-gray-400 dark:text-gray-500">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#007ACC]" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">AWS Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#10B981]" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Team Lead</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#007ACC]" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Enterprise</span>
              </div>
            </div>
          </div>

          {/* Right Content - Classic Professional Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Profile Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Header Gradient */}
                <div className="h-32 bg-gradient-to-r from-[#007ACC] to-[#10B981] relative">
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                    <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-700 overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-gradient-to-br from-[#007ACC]/20 to-[#10B981]/20 flex items-center justify-center">
                        <span className="text-5xl font-bold text-[#007ACC]">JD</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="pt-20 pb-8 px-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    John Doe
                  </h2>
                  <p className="text-[#007ACC] dark:text-[#60A5FA] font-medium mt-1">
                    Node.js Enterprise Architect
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-gradient-to-r from-[#007ACC] to-[#10B981] mx-auto rounded-full my-4" />

                  {/* Bio */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Building enterprise-grade Node.js solutions with focus on 
                    scalability, performance, and maintainability. Passionate 
                    about microservices and cloud-native architecture.
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    <span className="px-3 py-1 bg-[#007ACC]/10 dark:bg-[#007ACC]/20 text-[#007ACC] dark:text-[#60A5FA] text-xs font-medium rounded-full">
                      NestJS
                    </span>
                    <span className="px-3 py-1 bg-[#10B981]/10 dark:bg-[#10B981]/20 text-[#10B981] text-xs font-medium rounded-full">
                      Microservices
                    </span>
                    <span className="px-3 py-1 bg-[#007ACC]/10 dark:bg-[#007ACC]/20 text-[#007ACC] dark:text-[#60A5FA] text-xs font-medium rounded-full">
                      AWS
                    </span>
                    <span className="px-3 py-1 bg-[#10B981]/10 dark:bg-[#10B981]/20 text-[#10B981] text-xs font-medium rounded-full">
                      Docker
                    </span>
                    <span className="px-3 py-1 bg-[#007ACC]/10 dark:bg-[#007ACC]/20 text-[#007ACC] dark:text-[#60A5FA] text-xs font-medium rounded-full">
                      Kubernetes
                    </span>
                    <span className="px-3 py-1 bg-[#10B981]/10 dark:bg-[#10B981]/20 text-[#10B981] text-xs font-medium rounded-full">
                      GraphQL
                    </span>
                  </div>

                  {/* Key Achievements */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="text-lg font-bold text-[#007ACC]">10+</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Years</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#10B981]">50+</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#007ACC]">99.9%</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Uptime</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4">
                <div className="px-4 py-2 bg-gradient-to-r from-[#10B981] to-[#007ACC] rounded-full shadow-lg">
                  <p className="text-xs font-bold text-white">Available for Consulting</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4">
                <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                    </span>
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Open to Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}