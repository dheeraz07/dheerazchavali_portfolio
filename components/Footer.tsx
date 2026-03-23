"use client";

import { contactInfo } from "@/data/content";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: contactInfo.github, label: "GitHub" },
  { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${contactInfo.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/50 dark:border-white/[0.06]">
      <div className="section-container flex flex-col items-center gap-6 py-10">
        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-all hover:bg-accent/10 hover:text-accent dark:text-slate-400 dark:hover:text-accent-light"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-400 dark:text-slate-500">
          &copy; {new Date().getFullYear()} Shanmukha Sai Dheeraz Chavali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
