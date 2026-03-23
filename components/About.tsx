"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/content";
import SectionWrapper from "./SectionWrapper";
import { MapPin, Briefcase, BookOpen, Award } from "lucide-react";

const statIcons = [Briefcase, BookOpen, Award, MapPin];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section header */}
      <div className="mb-16 text-center">
        <motion.span
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.span>
        <h2 className="section-heading text-center">
          My Journey & Impact
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Left: Photo placeholder */}
        <div className="flex items-start justify-center lg:col-span-2">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl border-2 border-accent/20 sm:h-80 sm:w-80">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-indigo-500/5 to-cyan-500/10" />
              <div className="flex h-full items-center justify-center">
                <span className="font-display text-6xl font-bold text-accent/20">DC</span>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl border border-accent/20 bg-accent/5 dark:bg-accent/10" />
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-lg border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10" />
          </motion.div>
        </div>

        {/* Right: Bio + badges */}
        <motion.div
          className="lg:col-span-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutContent.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="mb-4 text-base leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Currently badges */}
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-500">
              Currently:
            </span>
            {aboutContent.currentBadges.map((badge) => (
              <span key={badge} className="tag-badge">
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {aboutContent.stats.map((stat, i) => {
          const Icon = statIcons[i % statIcons.length];
          return (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass-card flex flex-col items-center gap-2 p-6 text-center"
            >
              <Icon size={20} className="text-accent" />
              <span className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                {stat.value}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Gradient separator */}
      <div className="gradient-separator mt-20" />
    </SectionWrapper>
  );
}
