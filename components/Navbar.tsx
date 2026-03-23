"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { navLinks } from "@/data/content";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenChatbot?: () => void;
}

export default function Navbar({ onOpenChatbot }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks
        .filter((l) => l.href !== "#chatbot")
        .map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#chatbot") {
      onOpenChatbot?.();
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-200/10 bg-white/80 shadow-sm backdrop-blur-xl dark:border-white/[0.06] dark:bg-surface-900/80"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-container flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-xl font-bold tracking-tight text-slate-900 transition-colors hover:text-accent dark:text-white dark:hover:text-accent-light"
          >
            Dheeraz<span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-accent dark:text-accent-light"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Sliding theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="relative ml-4 flex h-7 w-14 items-center rounded-full border border-slate-200/50 bg-slate-100 p-0.5 transition-colors duration-300 dark:border-white/10 dark:bg-white/10"
                aria-label="Toggle theme"
              >
                <Sun size={12} className="absolute left-1.5 text-amber-500" />
                <Moon size={12} className="absolute right-1.5 text-slate-400" />
                <motion.div
                  className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-surface-900"
                  animate={{ x: isDark ? 26 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            )}
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="relative flex h-7 w-14 items-center rounded-full border border-slate-200/50 bg-slate-100 p-0.5 transition-colors duration-300 dark:border-white/10 dark:bg-white/10"
                aria-label="Toggle theme"
              >
                <Sun size={12} className="absolute left-1.5 text-amber-500" />
                <Moon size={12} className="absolute right-1.5 text-slate-400" />
                <motion.div
                  className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-surface-900"
                  animate={{ x: isDark ? 26 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl dark:bg-surface-900/95 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-semibold text-slate-700 transition-colors hover:text-accent dark:text-slate-200 dark:hover:text-accent-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
