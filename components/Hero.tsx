"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { heroContent } from "@/data/content";
import { ArrowDown, FileText } from "lucide-react";

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseMs = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), pauseMs);
      return;
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [text, wordIndex, isDeleting, words, pauseMs]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return text;
}

export default function Hero() {
  const typedText = useTypewriter(heroContent.roles, 80, 50, 2200);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-white dark:bg-surface-900">
        <div className="hero-mesh absolute inset-0" />
        <div className="grid-pattern absolute inset-0" />
        <div className="noise-overlay absolute inset-0" />

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-3xl"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/4 h-[600px] w-[600px] rounded-full bg-indigo-500/[0.03] blur-3xl"
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.02] blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="section-container relative z-10 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm dark:bg-accent/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {heroContent.name.split(" ").map((word, i) => (
            <span key={i}>
              {i === heroContent.name.split(" ").length - 1 ? (
                <span className="gradient-text">{word}</span>
              ) : (
                <>{word} </>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex items-center gap-2 text-xl font-medium text-slate-600 dark:text-slate-400 sm:text-2xl"
        >
          <span className="text-accent">&gt;</span>
          <span>{typedText}</span>
          <span className="animate-typewriter-cursor text-accent">|</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg"
        >
          {heroContent.bio}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            View Projects
            <ArrowDown size={16} className="animate-bounce" />
          </button>
          <a
            href={heroContent.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FileText size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Scroll indicator — bottom left */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-6 sm:left-8"
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-xs text-slate-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-slate-400 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
