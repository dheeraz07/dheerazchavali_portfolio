"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { educationEntries } from "@/data/content";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, ChevronDown, MapPin, CalendarDays } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const expandVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="education">
      {/* Section header */}
      <div className="mb-16 text-center">
        <motion.span
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Education
        </motion.span>
        <h2 className="section-heading text-center">
          Academic Background
        </h2>
        <p className="section-subheading mx-auto text-center">
          A rigorous foundation in data science, machine learning, and quantitative methods
        </p>
      </div>

      {/* Education cards (accordion) */}
      <div className="mx-auto max-w-3xl space-y-4">
        {educationEntries.map((entry, index) => (
          <motion.div
            key={entry.institution}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            {/* Card header (clickable) */}
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center gap-4 p-6 text-left"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <GraduationCap size={22} />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                    {entry.institution}
                  </h3>
                  {entry.current && (
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                  {entry.degree}
                  {entry.gpa && (
                    <span className="ml-2 text-accent">GPA: {entry.gpa}</span>
                  )}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={11} />
                    {entry.period}
                  </span>
                  {entry.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={11} />
                      {entry.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Chevron */}
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 text-slate-400"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            {/* Expandable courses */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  variants={expandVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  className="overflow-hidden"
                >
                  <div className="border-t border-slate-200/50 px-6 pb-6 pt-4 dark:border-white/5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                      Key Courses
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {entry.courses.map((course) => (
                        <span key={course} className="tag-badge">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="gradient-separator mt-20" />
    </SectionWrapper>
  );
}
