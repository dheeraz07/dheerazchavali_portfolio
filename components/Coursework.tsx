"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseworkEntries } from "@/data/content";
import SectionWrapper from "./SectionWrapper";
import { BookOpen, ChevronDown } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const expandVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Coursework() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="coursework">
      {/* Section header */}
      <div className="mb-16 text-center">
        <motion.span
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Theoretical Knowledge
        </motion.span>
        <h2 className="section-heading text-center">
          Academic Coursework
        </h2>
        <p className="section-subheading mx-auto text-center">
          A rigorous curriculum spanning mathematical foundations, machine learning, and applied AI systems
        </p>
      </div>

      {/* Coursework accordion grid */}
      <motion.div
        className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {courseworkEntries.map((course, index) => (
          <motion.div
            key={course.title}
            variants={cardVariants}
            className="glass-card overflow-hidden"
          >
            {/* Card header */}
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-slate-50/50 dark:hover:bg-white/[0.02]"
            >
              <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <BookOpen size={15} />
              </div>
              <div className="min-w-0 flex-grow">
                <h3 className="text-sm font-bold leading-tight text-slate-900 dark:text-white">
                  {course.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="mt-0.5 flex-shrink-0 text-slate-400"
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>

            {/* Expandable content */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  variants={expandVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  className="overflow-hidden"
                >
                  <div className="border-t border-slate-200/50 px-4 pb-4 pt-3 dark:border-white/5">
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {course.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {course.tags.map((tag) => (
                        <span key={tag} className="tag-badge text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <div className="gradient-separator mt-20" />
    </SectionWrapper>
  );
}
