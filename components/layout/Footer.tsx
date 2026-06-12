"use client";

import Link from "next/link";
// import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/20 dark:border-slate-800">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* CTA Section */}

        <div className="text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-sky-500/20
              px-4
              py-2
              text-sm
              text-sky-600
              dark:text-sky-400
            "
          >
            Available for Consulting & Projects
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-black
              tracking-tight
            "
          >
            Let's Build Something
            <br />

            <span
              className="
                bg-gradient-to-r
                from-sky-500
                to-emerald-500
                bg-clip-text
                text-transparent
              "
            >
              Exceptional
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-slate-600
              dark:text-slate-400
            "
          >
            Building scalable SaaS platforms, enterprise systems,
            cloud-native architectures, and AI-powered solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#contact"
              className="
                rounded-2xl
                bg-sky-600
                px-8
                py-4
                font-medium
                text-white
                transition-all
                hover:scale-105
                hover:bg-sky-700
              "
            >
              Schedule Consultation
            </Link>

            <Link
              href="mailto:hello@yourdomain.com"
              className="
                rounded-2xl
                border
                border-slate-300
                px-8
                py-4
                font-medium
                transition-all
                hover:scale-105
                dark:border-slate-700
              "
            >
              Send Email
            </Link>
          </div>
        </div>

        {/* Divider */}

        <div className="my-16 border-t border-slate-200/20 dark:border-slate-800" />

        {/* Bottom Bar */}

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}

          <div>
            <h3 className="text-xl font-bold">
              Viki<span className="text-sky-500">GenPro</span>
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Software Architect • Cloud Engineer • AI Consultant
            </p>
          </div>

          {/* Navigation */}

          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="#about" className="hover:text-sky-500">
              About
            </Link>

            <Link href="#projects" className="hover:text-sky-500">
              Projects
            </Link>

            <Link href="#services" className="hover:text-sky-500">
              Services
            </Link>

            <Link href="#blog" className="hover:text-sky-500">
              Blog
            </Link>

            <Link href="#contact" className="hover:text-sky-500">
              Contact
            </Link>
          </div>

          {/* Socials */}

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              className="
                rounded-xl
                border
                p-3
                transition-all
                hover:border-sky-500
                hover:text-sky-500
              "
            >
              <FaGithub size={30} />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="
                rounded-xl
                border
                p-3
                transition-all
                hover:border-sky-500
                hover:text-sky-500
              "
            >
              <FaLinkedin size={18} />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              className="
                rounded-xl
                border
                p-3
                transition-all
                hover:border-sky-500
                hover:text-sky-500
              "
            >
              <FaTwitter size={18} />
            </Link>

            <Link
              href="mailto:hello@yourdomain.com"
              className="
                rounded-xl
                border
                p-3
                transition-all
                hover:border-emerald-500
                hover:text-emerald-500
              "
            >
              <FaEnvelope size={18} />
            </Link>
          </div>
        </div>

        {/* Copyright */}

        <div className="mt-12 text-center text-sm text-slate-500">
          © {year} Viki GenPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}