"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/content";
import SectionWrapper from "./SectionWrapper";
import { Code2, Brain, Cloud, BarChart3 } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  brain: Brain,
  cloud: Cloud,
  chart: BarChart3,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const tagContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Section header */}
      <div className="mb-16 text-center">
        <motion.span
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.span>
        <h2 className="section-heading text-center">
          Technical Competencies
        </h2>
        <p className="section-subheading mx-auto text-center">
          Technologies and frameworks I work with to build intelligent systems
        </p>
      </div>

      {/* Skill categories grid */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon] || Code2;
          return (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="glass-card p-6"
            >
              {/* Category header */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={tagContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.span key={skill} variants={tagVariants} className="tag-badge">
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="gradient-separator mt-20" />
    </SectionWrapper>
  );
}
