import {
  aboutContent,
  experienceEntries,
  projects,
  skillCategories,
  educationEntries,
  contactInfo,
  heroContent,
} from "@/data/content";

/**
 * Builds a comprehensive knowledge base string from all portfolio content.
 * Used as context for the chatbot - either injected into an LLM prompt
 * or used for local keyword-based matching.
 */
export function buildKnowledgeBase(): string {
  const sections: string[] = [];

  sections.push(
    `IDENTITY: My name is Shanmukha Sai Dheeraz Chavali. I go by Dheeraz. I am a Data Science MSc student jointly at ETH Zürich and EPFL. ${heroContent.bio}`
  );

  sections.push(`ABOUT:\n${aboutContent.bio.join("\n")}`);

  sections.push(
    `CURRENT AFFILIATIONS: ${aboutContent.currentBadges.join(", ")}`
  );

  sections.push(
    `STATS: ${aboutContent.stats.map((s) => `${s.value} ${s.label}`).join(" · ")}`
  );

  const expText = experienceEntries
    .map(
      (e) =>
        `- ${e.role} at ${e.company} (${e.period}, ${e.location}): ${e.bullets.join("; ")}. Technologies: ${e.tags?.join(", ") ?? "N/A"}`
    )
    .join("\n");
  sections.push(`WORK EXPERIENCE:\n${expText}`);

  const projText = projects
    .map(
      (p) =>
        `- ${p.title}: ${p.description} Technologies: ${p.tags.join(", ")}${p.badge ? ` [${p.badge}]` : ""}`
    )
    .join("\n");
  sections.push(`PROJECTS:\n${projText}`);

  const skillText = skillCategories
    .map((c) => `- ${c.title}: ${c.skills.join(", ")}`)
    .join("\n");
  sections.push(`SKILLS:\n${skillText}`);

  const eduText = educationEntries
    .map(
      (e) =>
        `- ${e.institution}: ${e.degree}${e.gpa ? ` (GPA: ${e.gpa})` : ""}, ${e.period}. Courses: ${e.courses.join(", ")}`
    )
    .join("\n");
  sections.push(`EDUCATION:\n${eduText}`);

  sections.push(
    `CONTACT: Email: ${contactInfo.email}, LinkedIn: ${contactInfo.linkedin}, GitHub: ${contactInfo.github}, Location: ${contactInfo.location}. ${contactInfo.tagline}`
  );

  return sections.join("\n\n");
}

/** Quick-reply suggestion chips shown in the chat */
export const quickReplies = [
  "Academic background",
  "Technical skills",
  "Work experience",
  "Projects",
  "What are you looking for?",
];

export interface KnowledgeMatch {
  answer: string;
  confidence: number;
}

/**
 * Local keyword-based answer engine. No API required.
 * Matches user queries against portfolio content and returns the best answer.
 */
export function getLocalAnswer(query: string): KnowledgeMatch {
  const q = query.toLowerCase().trim();

  // Greeting patterns
  if (/^(hi|hello|hey|howdy|greetings|yo|sup|what'?s up)/i.test(q)) {
    return {
      answer:
        "Hello! I'm Dheeraz's portfolio assistant. I can tell you about his education, work experience, projects, technical skills, or anything else on his profile. What would you like to know?",
      confidence: 1,
    };
  }

  // Identity / who
  if (/who (is|are)|tell me about (yourself|dheeraz|him)|introduce/i.test(q)) {
    return {
      answer: `Shanmukha Sai Dheeraz Chavali is a Data Science MSc student jointly at **ETH Zürich** and **EPFL**, with a background in ML engineering, NLP, LLM systems, AWS data engineering, and quantitative finance.\n\n${aboutContent.bio[0]}`,
      confidence: 0.95,
    };
  }

  // Education
  if (/education|university|degree|school|study|studying|academic|gpa|course|eth|epfl|basel|sastra/i.test(q)) {
    const eduLines = educationEntries.map(
      (e) =>
        `**${e.institution}** - ${e.degree}${e.gpa ? ` (GPA: ${e.gpa})` : ""}\n${e.period} · ${e.location}\nCourses: ${e.courses.join(", ")}`
    );
    return {
      answer: `Here's Dheeraz's academic background:\n\n${eduLines.join("\n\n")}`,
      confidence: 0.95,
    };
  }

  // Experience / work
  if (/experience|work|job|career|intern|employ|accenture|philip morris|pmi|indium|company/i.test(q)) {
    const expLines = experienceEntries.map(
      (e) =>
        `**${e.role}** at ${e.company}\n${e.period} · ${e.location}\n${e.bullets.map((b) => `• ${b}`).join("\n")}`
    );
    return {
      answer: `Here's Dheeraz's professional experience:\n\n${expLines.join("\n\n")}`,
      confidence: 0.95,
    };
  }

  // Projects
  if (/project|portfolio|built|build|work.*on|rag|deepfake|segmentation|financial risk|maintenance/i.test(q)) {
    const projLines = projects.map(
      (p) =>
        `**${p.title}**${p.badge ? ` [${p.badge}]` : ""}\n${p.description}\nTech: ${p.tags.join(", ")}`
    );
    return {
      answer: `Here are Dheeraz's key projects:\n\n${projLines.join("\n\n")}`,
      confidence: 0.9,
    };
  }

  // Skills
  if (/skill|tech|stack|language|framework|tool|python|pytorch|aws|ml|ai|machine learning|deep learning|nlp|cloud/i.test(q)) {
    const skillLines = skillCategories.map(
      (c) => `**${c.title}:** ${c.skills.join(", ")}`
    );
    return {
      answer: `Here are Dheeraz's technical skills:\n\n${skillLines.join("\n\n")}`,
      confidence: 0.9,
    };
  }

  // Contact
  if (/contact|email|reach|linkedin|github|hire|connect|touch/i.test(q)) {
    return {
      answer: `You can reach Dheeraz through:\n\n📧 **Email:** ${contactInfo.email}\n💼 **LinkedIn:** [dheerazchavali](${contactInfo.linkedin})\n🐙 **GitHub:** [dheeraz07](${contactInfo.github})\n📍 **Location:** ${contactInfo.location}\n\n*${contactInfo.tagline}*`,
      confidence: 0.95,
    };
  }

  // Looking for / goals / interests
  if (/looking for|goal|interest|want|seeking|opportunity|future|aspir/i.test(q)) {
    return {
      answer: `Dheeraz is currently open to opportunities in **Quant Research**, **ML Engineering**, and **Data Science**. He's particularly interested in roles at the intersection of AI and quantitative finance - building systems that are technically rigorous and deliver real-world impact at scale.\n\nHe is currently completing his MSc in Data Science at ETH Zürich & EPFL while interning at Philip Morris International on enterprise-scale LLM/RAG systems.`,
      confidence: 0.9,
    };
  }

  // Resume / CV
  if (/resume|cv|download/i.test(q)) {
    return {
      answer: `You can download Dheeraz's CV here: [Download CV](${heroContent.cvPath})`,
      confidence: 0.95,
    };
  }

  // Location
  if (/where|location|based|live|city|country|switzerland/i.test(q)) {
    return {
      answer: `Dheeraz is currently based in **${contactInfo.location}**. He studies at ETH Zürich (Zürich) and EPFL (Lausanne), and is interning at Philip Morris International in Vaud, Switzerland.`,
      confidence: 0.9,
    };
  }

  // Fallback
  return {
    answer:
      "I'm not sure I understand that question. I can help you with information about Dheeraz's **education**, **work experience**, **projects**, **technical skills**, or **contact details**. What would you like to know?",
    confidence: 0.3,
  };
}
