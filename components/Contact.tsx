"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/content";
import SectionWrapper from "./SectionWrapper";
import { Mail, Linkedin, Github, MapPin, Send, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "dheerazchavali",
    href: contactInfo.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "dheeraz07",
    href: contactInfo.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactInfo.location,
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const mailtoLink = `mailto:${contactInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");

    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <SectionWrapper id="contact">
      {/* Section header */}
      <div className="mb-16 text-center">
        <motion.span
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.span>
        <h2 className="section-heading text-center">Get in Touch</h2>
        <p className="section-subheading mx-auto text-center">
          {contactInfo.tagline}
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
        {/* Contact info cards */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {contactLinks.map((link) => (
            <motion.div key={link.label} variants={fadeUp}>
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="glass-card flex items-center gap-4 p-4 transition-all hover:border-accent/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <link.icon size={18} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400" />
                </a>
              ) : (
                <div className="glass-card flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <link.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {link.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          className="glass-card space-y-4 p-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all
                         placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20
                         dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600
                         dark:focus:border-accent/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all
                         placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20
                         dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600
                         dark:focus:border-accent/50"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all
                         placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20
                         dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600
                         dark:focus:border-accent/50"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full justify-center"
          >
            {status === "sending" ? (
              "Sending..."
            ) : status === "sent" ? (
              "Sent!"
            ) : (
              <>
                Send Message
                <Send size={16} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
