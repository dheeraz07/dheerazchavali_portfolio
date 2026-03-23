"use client";

import { motion } from "framer-motion";
import { experienceEntries } from "@/data/content";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const dotPulse = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Section header */}
      <div className="mb-16 text-center">
        <motion.span
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.span>
        <h2 className="section-heading text-center">
          Work Experience & Internships
        </h2>
        <p className="section-subheading mx-auto text-center">
          A track record of building production ML systems and driving measurable impact
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="timeline-line" />

        {experienceEntries.map((entry, index) => (
          <motion.div
            key={`${entry.company}-${entry.period}`}
            className={`relative mb-12 last:mb-0 md:flex md:items-start ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute left-[12px] top-2 z-10 md:left-1/2 md:-translate-x-1/2"
              variants={dotPulse}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="h-[14px] w-[14px] rounded-full border-[3px] border-accent bg-white dark:bg-surface-900" />
                <div className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
              </div>
            </motion.div>

            {/* Card */}
            <div
              className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}
            >
              <div className="glass-card p-6">
                {/* Period badge */}
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent dark:text-accent-light">
                    <Calendar size={12} />
                    {entry.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
                    <MapPin size={12} />
                    {entry.location}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {entry.role}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-accent">
                  <Briefcase size={14} />
                  {entry.company}
                </div>

                {/* Bullets */}
                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/50" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                {entry.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-white/5 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="gradient-separator mt-20" />
    </SectionWrapper>
  );
}
