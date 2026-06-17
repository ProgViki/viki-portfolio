"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Blog",
    href: "#blog",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed
          top-5
          left-1/2
          z-50
          w-[95%]
          max-w-7xl
          -translate-x-1/2
        "
      >
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/70
            dark:bg-slate-950/70
            backdrop-blur-xl
            shadow-xl
          "
        >
          <div
            className="
              flex
              h-20
              items-center
              justify-between
              px-4
              sm:px-6
            "
          >
            <Link
              href="/"
              className="
                text-xl
                sm:text-2xl
                font-black
                flex-shrink-0
                text-gray-900
                dark:text-white
              "
            >
              Prog
              <span
                className="
                  bg-gradient-to-r
                  from-sky-500
                  to-emerald-500
                  bg-clip-text
                  text-transparent
                "
              >
                Viki
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="
                hidden
                md:flex
                items-center
                gap-8
              "
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                    dark:text-gray-300
                    transition-colors
                    hover:text-sky-500
                    dark:hover:text-sky-400
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Section */}
            <div
              className="
                hidden
                md:flex
                items-center
                gap-4
              "
            >
              <ThemeToggle />
              <button
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-sky-500
                  to-emerald-500
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  hover:shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Right Section */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setOpen(!open)}
                className="
                  p-1 
                  text-gray-700 
                  dark:text-gray-300
                  hover:text-sky-500 
                  dark:hover:text-sky-400
                  transition-colors
                "
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/50
            backdrop-blur-sm
            md:hidden
            animate-in
            fade-in
            duration-200
          "
          onClick={() => setOpen(false)}
        >
          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-[300px]
              bg-white
              dark:bg-slate-900
              shadow-2xl
              animate-in
              slide-in-from-right
              duration-300
              border-l
              border-gray-200
              dark:border-gray-800
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                className="
                  p-1 
                  text-gray-700 
                  dark:text-gray-300
                  hover:text-sky-500 
                  dark:hover:text-sky-400
                  transition-colors
                "
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-lg
                    font-medium
                    text-gray-700
                    dark:text-gray-200
                    transition-colors
                    hover:text-sky-500
                    dark:hover:text-sky-400
                    py-3
                    px-4
                    rounded-xl
                    hover:bg-gray-100
                    dark:hover:bg-gray-800
                    border-b
                    border-gray-100
                    dark:border-gray-800
                    last:border-0
                  "
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Hire Me Button */}
              <button
                className="
                  mt-4
                  w-full
                  rounded-xl
                  bg-gradient-to-r
                  from-sky-500
                  to-emerald-500
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  hover:shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
                onClick={() => setOpen(false)}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}