export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  name: string;
  roles: string[];
  bio: string;
  cvPath: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutContent {
  bio: string[];
  currentBadges: string[];
  stats: Stat[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags?: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  gpa?: string;
  period: string;
  location?: string;
  courses: string[];
  current?: boolean;
}

export interface CourseworkEntry {
  title: string;
  description: string;
  tags: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  tagline: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
}

// ─── Site Metadata ────────────────────────────────────────────
export const siteMetadata: SiteMetadata = {
  title: "Shanmukha Sai Dheeraz Chavali - Data Scientist & ML Engineer",
  description:
    "MSc Data Science @ ETH Zürich & EPFL · Building intelligent systems at the intersection of ML, quantitative finance, and scalable data engineering.",
  url: "https://www.dheerazchavali.com",
  ogImage: "/og-image.png",
  author: "Shanmukha Sai Dheeraz Chavali",
};

// ─── Navigation ───────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Coursework", href: "#coursework" },
  { label: "ChatBot", href: "#chatbot" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero ─────────────────────────────────────────────────────
export const heroContent: HeroContent = {
  name: "Shanmukha Sai Dheeraz Chavali",
  roles: [
    "Data Scientist",
    "ML Engineer",
    "Quant Researcher",
    "LLM Systems Builder",
  ],
  bio: "MSc Data Science @ ETH Zürich & EPFL · Building intelligent systems at the intersection of ML, quantitative finance, and scalable data engineering.",
  cvPath: "/ShanmukhaSaiDheerazChavali_CV_DS.pdf",
};

// ─── About ────────────────────────────────────────────────────
export const aboutContent: AboutContent = {
  bio: [
    "I am a Data Science MSc student jointly at ETH Zürich and EPFL, specializing in machine learning, NLP, and large-scale data systems. My work spans from building enterprise-grade RAG pipelines and LLM evaluation frameworks to designing predictive models for financial risk and quantitative research.",
    "With 3+ years of industry experience at Accenture, Philip Morris International, and the University of Basel, I have shipped production ML systems on AWS, built graph-based knowledge retrieval engines, and led cross-functional analytics projects that drove measurable business impact.",
    "I am passionate about the convergence of AI and quantitative finance - designing systems that are not only technically rigorous but also deliver real-world value at scale.",
  ],
  currentBadges: [
    "ETH Zürich",
    "EPFL",
    "University of Basel",
    "Philip Morris International",
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "5+", label: "Projects Shipped" },
    { value: "2", label: "Research Papers" },
    { value: "Zürich", label: "Based In" },
  ],
};

// ─── Experience ───────────────────────────────────────────────
export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Philip Morris International",
    role: "Data Science & AI Engineer Intern",
    period: "Mar 2026 - Present",
    location: "Vaud, Switzerland",
    bullets: [
      "Architecting enterprise-scale RAG pipeline on AWS Bedrock with semantic chunking and custom re-ranking, reducing hallucination rates by ~40%",
      "Building A/B test harnesses via SageMaker MLflow across 15+ prompt-model combinations on correctness, faithfulness, and latency",
    ],
    tags: ["AWS Bedrock", "RAG", "SageMaker", "MLflow", "LLM"],
  },
  {
    company: "University of Basel",
    role: "Research & Teaching Assistant",
    period: "Feb 2025 - Jan 2026",
    location: "Basel, Switzerland",
    bullets: [
      "Spearheading interdisciplinary AI-humanities research integrating LLMs into historical scholarship",
      "Built graph-based RAG pipeline (Neo4j + LangChain) improving context retrieval accuracy by 40%",
    ],
    tags: ["Neo4j", "LangChain", "NLP", "LLM", "Research"],
  },
  {
    company: "University of Basel (SNSF Project)",
    role: "Research Assistant",
    period: "Nov 2024 - Feb 2025",
    location: "Basel, Switzerland",
    bullets: [
      "Developed scalable NLP pipelines (HuggingFace, spaCy) for sentiment analysis and topic modeling",
      "Designed multimodal ML models (TensorFlow, PyTorch) for cross-platform trade analysis",
    ],
    tags: ["HuggingFace", "spaCy", "TensorFlow", "PyTorch", "NLP"],
  },
  {
    company: "Accenture",
    role: "Advanced Application Engineering Sr. Analyst",
    period: "Feb 2022 - Aug 2024",
    location: "Bengaluru, India",
    bullets: [
      "Built predictive analytics pipeline on AWS (S3, Glue, Redshift, SageMaker) generating $60K/quarter savings",
      "Designed Amazon Connect + Salesforce integration saving $40K/quarter in licensing costs",
      "Automated patient voice query documentation system saving $30K/quarter",
    ],
    tags: ["AWS", "SageMaker", "Salesforce", "Redshift", "Python"],
  },
  {
    company: "Indium Software",
    role: "Junior Data Engineer",
    period: "May 2021 - Dec 2021",
    location: "Chennai, India",
    bullets: [
      "Designed hybrid vector-graph search system with 85% precision improvement",
      "Reduced storage costs by $25K/month via S3 intelligent tiering",
    ],
    tags: ["AWS S3", "Data Engineering", "ETL", "Python"],
  },
];

// ─── Projects ─────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: "Financial Risk Analytics Automation Tool",
    description:
      "End-to-end Python tool automating multi-source time-series ingestion, ensemble risk modelling, and LLM-powered memo generation into reproducible Plotly dashboards.",
    tags: ["Python", "AWS", "XGBoost", "LLM", "Plotly", "SageMaker"],
    github: "https://github.com/dheeraz07",
    badge: "Production-grade",
  },
  {
    title: "Enterprise RAG Pipeline (AWS Bedrock)",
    description:
      "Semantic chunking + custom re-ranking RAG system on AWS Bedrock Knowledge Bases, reducing hallucination by ~40% with contextual guardrails.",
    tags: ["Python", "AWS Bedrock", "SageMaker", "MLflow", "RAG", "LLM"],
    badge: "Live at PMI",
  },
  {
    title: "Predictive Maintenance System",
    description:
      "Ensemble model (XGBoost + Random Forest + TFT) on multivariate sensor time-series, reducing false failure alerts by 35% with full reproducible pipeline.",
    tags: ["Python", "TensorFlow", "PyTorch", "XGBoost", "LSTM", "TFT", "AWS"],
    github: "https://github.com/dheeraz07",
  },
  {
    title: "Deepfake Detection Pipeline",
    description:
      "Hybrid CNN-LSTM (ResNeXt-101 + BiLSTM) pipeline achieving 89% accuracy on FaceForensics++, robust to StyleGAN3 and diffusion-based attacks.",
    tags: ["Python", "PyTorch", "ResNeXt", "LSTM", "OpenCV", "Computer Vision"],
    github: "https://github.com/dheeraz07",
  },
  {
    title: "Graph-RAG Historical NLP Pipeline",
    description:
      "Neo4j + LangChain graph-based RAG enabling multi-hop reasoning across ancient scholarly texts, improving retrieval accuracy by 40% over keyword search.",
    tags: ["Python", "Neo4j", "LangChain", "NLP", "LLM", "Graph DB"],
    badge: "Research",
  },
  {
    title: "Semantic Segmentation on Satellite Imagery",
    description:
      "U-Net + EfficientNet-B7 achieving 92% mIoU on LandCover.ai; 40% training acceleration via FP16 mixed precision. Full W&B experiment tracking.",
    tags: ["Python", "PyTorch", "U-Net", "EfficientNet", "W&B", "Computer Vision"],
    github: "https://github.com/dheeraz07",
  },
];

// ─── Skills ───────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", description: "Primary language for ML, data engineering, and research - 5+ years of production use" },
      { name: "R", description: "Statistical computing and data visualization for academic research" },
      { name: "Java", description: "Object-oriented development for enterprise applications and data pipelines" },
      { name: "C++", description: "High-performance computing and algorithm-intensive applications" },
      { name: "SQL", description: "Complex queries, window functions, and optimization across Redshift, Postgres, and BigQuery" },
      { name: "TypeScript", description: "Type-safe full-stack development with Next.js and React" },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: "brain",
    skills: [
      { name: "PyTorch", description: "Deep learning research and production model training - CNNs, RNNs, Transformers" },
      { name: "TensorFlow", description: "End-to-end ML pipelines from prototyping to TFServing deployment" },
      { name: "Scikit-learn", description: "Classical ML models, feature engineering, and model evaluation workflows" },
      { name: "XGBoost", description: "Gradient boosting for tabular data - predictive maintenance and risk models" },
      { name: "HuggingFace", description: "Fine-tuning and deploying transformer models for NLP and text generation" },
      { name: "LangChain", description: "Building RAG pipelines, agent workflows, and LLM-powered applications" },
      { name: "RAG Systems", description: "Semantic chunking, re-ranking, and knowledge base retrieval at enterprise scale" },
      { name: "spaCy", description: "Production NLP pipelines - NER, dependency parsing, and text classification" },
      { name: "Transformers", description: "Attention-based architectures for NLP, vision, and multimodal tasks" },
      { name: "LSTM / RNNs", description: "Sequence modeling for time-series forecasting and temporal pattern recognition" },
    ],
  },
  {
    title: "Cloud & Data Engineering",
    icon: "cloud",
    skills: [
      { name: "AWS Bedrock", description: "Enterprise LLM deployment with knowledge bases and contextual guardrails" },
      { name: "AWS SageMaker", description: "Model training, hyperparameter tuning, and MLflow experiment tracking" },
      { name: "AWS S3 / Glue / Redshift", description: "Data lake architecture, ETL orchestration, and warehousing" },
      { name: "Azure", description: "Cloud-native ML services and data pipeline orchestration" },
      { name: "Apache Spark", description: "Distributed data processing for large-scale analytics and feature engineering" },
      { name: "Kafka", description: "Real-time event streaming and data pipeline ingestion" },
      { name: "Airflow", description: "Workflow orchestration for scheduled ML training and data pipelines" },
      { name: "Databricks", description: "Unified analytics platform for collaborative data science" },
      { name: "Neo4j", description: "Graph database for knowledge graphs and multi-hop retrieval" },
    ],
  },
  {
    title: "Quantitative Methods",
    icon: "chart",
    skills: [
      { name: "Time-Series Analysis", description: "ARIMA, GARCH, and neural forecasting for financial and sensor data" },
      { name: "Statistical Inference", description: "Hypothesis testing, confidence intervals, and causal analysis" },
      { name: "Bayesian Methods", description: "Probabilistic modeling, prior elicitation, and posterior inference" },
      { name: "Convex Optimization", description: "Constrained optimization for portfolio allocation and model training" },
      { name: "Stochastic Processes", description: "Markov chains, Brownian motion, and Monte Carlo simulation" },
      { name: "Risk Modeling", description: "VaR, CVaR, and ensemble approaches for financial risk quantification" },
    ],
  },
  {
    title: "Tools & Visualization",
    icon: "tools",
    skills: [
      { name: "Plotly", description: "Interactive dashboards and financial data visualization" },
      { name: "Tableau", description: "Business intelligence dashboards for stakeholder reporting" },
      { name: "Power BI", description: "Enterprise analytics and KPI tracking dashboards" },
      { name: "MLflow", description: "Experiment tracking, model registry, and reproducible ML workflows" },
      { name: "Weights & Biases", description: "Experiment logging, hyperparameter sweeps, and model comparison" },
      { name: "Git / GitHub", description: "Version control, CI/CD workflows, and collaborative development" },
      { name: "Docker", description: "Containerized model serving and reproducible development environments" },
      { name: "Jupyter", description: "Interactive research notebooks for prototyping and analysis" },
    ],
  },
];

// ─── Education ────────────────────────────────────────────────
export const educationEntries: EducationEntry[] = [
  {
    institution: "ETH Zürich",
    degree: "MSc Data Science (Special Student)",
    period: "Feb 2026 - Present",
    location: "Zürich, Switzerland",
    courses: ["Large Language Models", "Scientific Computing", "Data Modeling & Databases"],
    current: true,
  },
  {
    institution: "EPFL",
    degree: "MSc Data Science (Exchange)",
    gpa: "5.1 / 6.0",
    period: "Sep 2025 - Present",
    location: "Lausanne, Switzerland",
    courses: [
      "Foundation Models & Gen AI",
      "Modern NLP",
      "Applied Statistics",
      "Probabilistic Models of Modern AI",
    ],
    current: true,
  },
  {
    institution: "University of Basel",
    degree: "MSc Data Science",
    gpa: "5.0 / 6.0",
    period: "Sep 2024 - Jul 2025",
    location: "Basel, Switzerland",
    courses: [
      "Machine Learning",
      "Reinforcement Learning",
      "Algorithms & Data Structures",
      "Advanced Python",
    ],
  },
  {
    institution: "SASTRA University",
    degree: "BTech Electronics & Communication Engineering",
    gpa: "5.1 / 6.0",
    period: "Jul 2017 - Jun 2021",
    location: "Thanjavur, India",
    courses: [
      "Probability Theory",
      "Statistics & Numerical Methods",
      "Python",
      "R",
      "Java",
    ],
  },
];

// ─── Coursework ───────────────────────────────────────────────
export const courseworkEntries: CourseworkEntry[] = [
  {
    title: "Mathematics for Data Science",
    description:
      "Rigorous treatment of linear algebra, multivariate calculus, and optimization theory underpinning modern machine learning. Covers matrix decompositions, gradient methods, convexity, and spectral analysis with applications to dimensionality reduction and kernel methods.",
    tags: ["Linear Algebra", "Optimization", "Calculus", "Spectral Methods"],
  },
  {
    title: "Applied Statistics",
    description:
      "Statistical inference, hypothesis testing, regression analysis, and experimental design. Emphasis on Bayesian and frequentist approaches with applications to A/B testing, causal inference, and uncertainty quantification in data-driven decision making.",
    tags: ["Inference", "Regression", "Bayesian Methods", "Experimental Design"],
  },
  {
    title: "Probabilistic Models of Modern AI",
    description:
      "Probabilistic graphical models, variational inference, and generative modelling frameworks. Covers latent variable models, VAEs, normalizing flows, and diffusion processes with connections to modern foundation model architectures.",
    tags: ["Graphical Models", "Variational Inference", "Generative Models", "Diffusion"],
  },
  {
    title: "Graph Theory",
    description:
      "Formal study of graph structures, algorithms, and combinatorial optimization. Covers connectivity, planarity, network flows, spectral graph theory, and random graphs with applications to social networks and knowledge graph systems.",
    tags: ["Combinatorics", "Network Flows", "Spectral Theory", "Random Graphs"],
  },
  {
    title: "Machine Learning",
    description:
      "Supervised and unsupervised learning, kernel methods, ensemble techniques, and model selection. Covers SVMs, decision trees, boosting, clustering, and dimensionality reduction with rigorous treatment of bias-variance tradeoffs and generalization bounds.",
    tags: ["Supervised Learning", "Kernel Methods", "Ensemble Models", "Generalization"],
  },
  {
    title: "Reinforcement Learning",
    description:
      "Markov decision processes, policy gradient methods, Q-learning, and actor-critic architectures. Covers temporal difference learning, exploration-exploitation tradeoffs, and deep RL with applications to robotics and game-playing agents.",
    tags: ["MDPs", "Policy Gradients", "Deep RL", "Actor-Critic"],
  },
  {
    title: "Artificial Intelligence",
    description:
      "Foundational AI paradigms: search algorithms, constraint satisfaction, logical reasoning, and planning. Covers knowledge representation, probabilistic reasoning, and multi-agent systems with connections to modern intelligent system design.",
    tags: ["Search", "Reasoning", "Planning", "Multi-Agent Systems"],
  },
  {
    title: "Machine Intelligence",
    description:
      "Advanced deep learning architectures, attention mechanisms, and representation learning. Covers CNNs, RNNs, Transformers, self-supervised learning, and neural architecture search with emphasis on practical engineering of large-scale models.",
    tags: ["Deep Learning", "Transformers", "Self-Supervised", "Representation Learning"],
  },
  {
    title: "Large Language Models",
    description:
      "Architecture, pre-training, fine-tuning, and alignment of large language models. Covers tokenization, scaling laws, RLHF, prompt engineering, RAG systems, and safety considerations for production LLM deployment.",
    tags: ["Transformers", "RLHF", "Scaling Laws", "RAG", "Alignment"],
  },
  {
    title: "Modern NLP",
    description:
      "Contemporary natural language processing: contextual embeddings, sequence-to-sequence models, and neural text generation. Covers BERT, GPT architectures, information extraction, summarization, and multilingual NLP.",
    tags: ["Embeddings", "Seq2Seq", "Text Generation", "Information Extraction"],
  },
  {
    title: "Foundation Models and Gen AI",
    description:
      "Survey of foundation model paradigms: vision transformers, multimodal models, and generative AI systems. Covers diffusion models, CLIP, instruction tuning, emergent capabilities, and responsible deployment strategies.",
    tags: ["Vision Transformers", "Multimodal", "Diffusion", "Instruction Tuning"],
  },
  {
    title: "Algorithms and Data Structures",
    description:
      "Design paradigms including divide-and-conquer, dynamic programming, and greedy algorithms. Covers complexity analysis, graph algorithms, hashing, balanced trees, and amortized analysis for efficient system design.",
    tags: ["Dynamic Programming", "Graph Algorithms", "Complexity", "Hashing"],
  },
  {
    title: "Data Intensive Systems",
    description:
      "Architecture of large-scale data systems: distributed storage, query optimization, indexing, and transaction management. Covers relational and NoSQL databases, MapReduce, stream processing, and CAP theorem tradeoffs.",
    tags: ["Distributed Systems", "Query Optimization", "Stream Processing", "Databases"],
  },
  {
    title: "AI in Product Management",
    description:
      "Strategic integration of AI/ML into product development lifecycles. Covers opportunity identification, data strategy, model productionization, A/B testing, ethical considerations, and cross-functional collaboration between ML engineers and product teams.",
    tags: ["Product Strategy", "ML Ops", "A/B Testing", "Ethics"],
  },
  {
    title: "Ethics & Laws of AI",
    description:
      "Legal frameworks, ethical principles, and governance of artificial intelligence. Covers fairness, accountability, transparency, privacy regulations (GDPR), intellectual property in AI, and societal impact assessment of automated decision-making systems.",
    tags: ["Fairness", "Privacy", "Governance", "Accountability"],
  },
];

// ─── Contact ──────────────────────────────────────────────────
export const contactInfo: ContactInfo = {
  email: "dheerazchavali@gmail.com",
  linkedin: "https://www.linkedin.com/in/dheerazchavali/",
  github: "https://github.com/dheeraz07",
  location: "Vaud, Switzerland",
  tagline:
    "Open to internship opportunities in Quant Research, ML Engineering, Data Science",
};
