"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
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
  const [open, setOpen] =
    useState(false);

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
            px-6
          "
          >
            <Link
              href="/"
              className="
              text-2xl
              font-black
            "
            >
              Viki
              <span
                className="
                bg-gradient-to-r
                from-sky-500
                to-emerald-500
                bg-clip-text
                text-transparent
              "
              >
                GenPro
              </span>
            </Link>

            <nav
              className="
              hidden
              md:flex
              items-center
              gap-8
            "
            >
              {navItems.map(
                (item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                    text-sm
                    font-medium
                    transition-colors
                    hover:text-sky-500
                  "
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

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
              "
              >
                Hire Me
              </button>
            </div>

            <button
              onClick={() =>
                setOpen(!open)
              }
              className="md:hidden"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="
          fixed
          inset-0
          z-40
          bg-black/50
          backdrop-blur-sm
          md:hidden
        "
        >
          <div
            className="
            absolute
            right-0
            top-0
            h-full
            w-[300px]
            bg-white
            dark:bg-slate-950
            p-6
          "
          >
            <div
              className="
              mt-20
              flex
              flex-col
              gap-6
            "
            >
              {navItems.map(
                (item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() =>
                      setOpen(false)
                    }
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}