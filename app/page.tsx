"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Coursework from "@/components/Coursework";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <main className="relative">
      <Navbar onOpenChatbot={() => setChatbotOpen(true)} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Coursework />
      <Contact />
      <Footer />
      <Chatbot externalOpen={chatbotOpen} onExternalOpenHandled={() => setChatbotOpen(false)} />
    </main>
  );
}
