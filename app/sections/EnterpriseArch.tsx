"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Code2, Server, Database, Cloud, Shield, Zap, Layers, GitBranch } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background animation for enterprise architecture visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      connections: number[];
    }> = [];

    const numNodes = 60;
    const connectionDistance = 150;

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      });
    }

    // Calculate connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < connectionDistance) {
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        }
      }
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections with gradient
      nodes.forEach((node) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex];
          const dx = node.x - connectedNode.x;
          const dy = node.y - connectedNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            const gradient = ctx.createLinearGradient(
              node.x,
              node.y,
              connectedNode.x,
              connectedNode.y
            );
            gradient.addColorStop(0, `rgba(0, 122, 204, ${opacity * 0.6})`);
            gradient.addColorStop(0.5, `rgba(16, 185, 129, ${opacity * 0.4})`);
            gradient.addColorStop(1, `rgba(0, 122, 204, ${opacity * 0.6})`);

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      });

      // Draw nodes with glow
      nodes.forEach((node) => {
        // Glow effect
        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 4
        );
        glow.addColorStop(0, `rgba(0, 122, 204, 0.8)`);
        glow.addColorStop(1, `rgba(0, 122, 204, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Node
        ctx.fillStyle = "#007ACC";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Highlight
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(node.x - node.radius * 0.3, node.y - node.radius * 0.3, node.radius * 0.4, 0, Math.PI * 2);
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
      {/* Animated Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#007ACC]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#007ACC]/5 to-[#10B981]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007ACC]/10 dark:bg-[#007ACC]/20 rounded-full border border-[#007ACC]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-sm font-medium text-[#007ACC] dark:text-[#60A5FA]">
                Enterprise Architecture Expert
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Enterprise-Grade
                <span className="block mt-2 bg-gradient-to-r from-[#007ACC] to-[#10B981] bg-clip-text text-transparent">
                  Node.js Architecture
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Building scalable, resilient, and high-performance enterprise systems 
                with Node.js, microservices, and cloud-native architecture.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#007ACC]">10+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#10B981]">50+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Enterprise Projects</div>
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
                Explore Architecture
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#007ACC] text-[#007ACC] dark:text-[#60A5FA] font-semibold rounded-full transition-all duration-300 hover:bg-[#007ACC] hover:text-white dark:hover:text-white"
              >
                Let's Collaborate
              </Link>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex items-center gap-6 pt-4 text-gray-400 dark:text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <span className="text-sm font-bold text-[#007ACC]">N</span>
                </div>
                <span className="text-sm font-medium">NestJS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Server className="w-4 h-4 text-[#007ACC]" />
                </div>
                <span className="text-sm font-medium">Microservices</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Cloud className="w-4 h-4 text-[#10B981]" />
                </div>
                <span className="text-sm font-medium">Cloud-Native</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enterprise Architecture Visualization */}
          <div className="relative hidden lg:block">
            <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              {/* Architecture Diagram */}
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">
                  Enterprise Architecture Stack
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* API Gateway Layer */}
                  <div className="col-span-2 p-4 bg-gradient-to-r from-[#007ACC]/10 to-[#10B981]/10 rounded-xl border border-[#007ACC]/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#007ACC]/10 rounded-lg">
                          <Layers className="w-5 h-5 text-[#007ACC]" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">API Gateway</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">NestJS + GraphQL</p>
                        </div>
                      </div>
                      <Shield className="w-5 h-5 text-[#10B981]" />
                    </div>
                  </div>

                  {/* Microservices Layer */}
                  <div className="col-span-2 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <Server className="w-5 h-5 text-[#007ACC]" />
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Microservices Cluster</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 bg-white dark:bg-gray-800 rounded-lg text-center border border-gray-200 dark:border-gray-600">
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Auth</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">JWT + OAuth</p>
                      </div>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded-lg text-center border border-gray-200 dark:border-gray-600">
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Payment</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Stripe</p>
                      </div>
                      <div className="p-2 bg-white dark:bg-gray-800 rounded-lg text-center border border-gray-200 dark:border-gray-600">
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Analytics</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Elastic</p>
                      </div>
                    </div>
                  </div>

                  {/* Data Layer */}
                  <div className="col-span-2 grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#007ACC]" />
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">PostgreSQL</p>
                      </div>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Primary Database</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#10B981]" />
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Redis</p>
                      </div>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Cache Layer</p>
                    </div>
                  </div>

                  {/* DevOps Layer */}
                  <div className="col-span-2 p-3 bg-gradient-to-r from-[#007ACC]/5 to-[#10B981]/5 rounded-xl border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <GitBranch className="w-4 h-4 text-[#007ACC]" />
                        <div>
                          <p className="text-xs font-medium text-gray-700 dark:text-gray-300">CI/CD Pipeline</p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400">Docker • Kubernetes • AWS</p>
                        </div>
                      </div>
                      <Zap className="w-4 h-4 text-[#10B981]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#007ACC] to-[#10B981] rounded-2xl opacity-20 blur-sm -z-10" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 animate-bounce">
              <div className="px-4 py-2 bg-gradient-to-r from-[#10B981] to-[#007ACC] rounded-full shadow-lg">
                <p className="text-xs font-bold text-white">Enterprise Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}