"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";
import SectionWrapper from "./SectionWrapper";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      {/* Section header */}
      <div className="mb-16 text-center">
        <motion.span
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.span>
        <h2 className="section-heading text-center">
          A Collection of My Work
        </h2>
        <p className="section-subheading mx-auto text-center">
          From enterprise ML pipelines to cutting-edge research - systems built for real-world impact
        </p>
      </div>

      {/* Project grid */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={cardVariants}>
            <div className="glass-card group flex h-full flex-col p-6">
              {/* Header with badge */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <Sparkles size={20} />
                </div>
                {project.badge && (
                  <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-badge text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex items-center gap-3 border-t border-slate-200/50 pt-4 dark:border-white/5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-accent dark:text-slate-400 dark:hover:text-accent-light"
                  >
                    <Github size={15} />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-accent dark:text-slate-400 dark:hover:text-accent-light"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="gradient-separator mt-20" />
    </SectionWrapper>
  );
}
