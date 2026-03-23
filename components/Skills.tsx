"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, type SkillItem } from "@/data/content";
import SectionWrapper from "./SectionWrapper";
import { Code2, Brain, Cloud, BarChart3, Wrench } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  brain: Brain,
  cloud: Cloud,
  chart: BarChart3,
  tools: Wrench,
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15 },
  },
};

const skillStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

function SkillChip({ skill }: { skill: SkillItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        variants={skillItemVariants}
        className="group cursor-default rounded-xl border border-slate-200/60 bg-white/60 px-4 py-3 transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 hover:shadow-md hover:shadow-accent/5 dark:border-white/[0.06] dark:bg-white/[0.03] dark:hover:border-accent/30 dark:hover:bg-accent/[0.08]"
      >
        <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-accent dark:text-slate-300 dark:group-hover:text-accent-light">
          {skill.name}
        </span>
      </motion.div>

      {/* Hover tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bottom-full left-1/2 z-30 mb-2 w-64 -translate-x-1/2"
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-surface-800">
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                {skill.name}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                {skill.description}
              </p>
            </div>
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="h-2 w-2 rotate-45 border-b border-r border-slate-200/80 bg-white dark:border-white/10 dark:bg-surface-800" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionWrapper id="skills">
      {/* Section header */}
      <div className="mb-12 text-center">
        <motion.span
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.span>
        <h2 className="section-heading text-center">
          Technical, Quantitative & Engineering Competencies
        </h2>
      </div>

      {/* Tab bar */}
      <motion.div
        className="mb-10 flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.icon] || Code2;
          const isActive = activeTab === index;
          return (
            <button
              key={category.title}
              onClick={() => setActiveTab(index)}
              className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-accent dark:text-accent-light"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">{category.title.split(" ")[0]}</span>
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-xl border border-accent/30 bg-accent/5 dark:bg-accent/10"
                  layoutId="skills-tab-bg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </motion.div>

      {/* Tab content */}
      <div className="mx-auto max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Category title with icon */}
            <div className="mb-6 flex items-center gap-3">
              {(() => {
                const Icon = iconMap[skillCategories[activeTab].icon] || Code2;
                return (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={20} />
                  </div>
                );
              })()}
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                {skillCategories[activeTab].title}
              </h3>
            </div>

            {/* Skills grid with hover tooltips */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
              variants={skillStagger}
              initial="hidden"
              animate="visible"
            >
              {skillCategories[activeTab].skills.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="gradient-separator mt-20" />
    </SectionWrapper>
  );
}
