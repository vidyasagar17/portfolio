// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file only.
//  Anything left empty ("" or []) is hidden automatically.
//  The page <title>, meta description and favicon live in index.html.
//  resume: a file path inside /public, e.g. "resume.pdf".
// ─────────────────────────────────────────────────────────────
import type { Portfolio } from "../types";

export const portfolio: Portfolio = {
  name: "Vidya Sagar C",
  role: "Software & AI Engineer",
  location: "United States",
  tagline:
    "I build LLM pipelines and production APIs that turn messy, unstructured data into something reliable.",
  resume: "",

  links: {
    email: "cvidhyasagar17@gmail.com",
    linkedin: "https://www.linkedin.com/in/vidya-sagar-c-79a2911b2/",
    github: "https://github.com/vidyasagar17",
    website: "",
  },

  // The hero highlights each `span` in `source` (in order) and fills the
  // record with its `value`. Every span must appear verbatim in `source`.
  hero: {
    source:
      "I'm Vidya Sagar, a software and AI engineer with an M.S. in Computer Science from George Mason University, finished in May 2026. As a graduate research assistant I built LLM pipelines on GCP. Before that I built machine translation APIs at Langscape. Now I'm looking for full-time software and AI engineering roles.",
    fields: [
      { key: "name", span: "Vidya Sagar", value: "Vidya Sagar C" },
      { key: "degree", span: "M.S. in Computer Science", value: "M.S. Computer Science" },
      { key: "school", span: "George Mason University", value: "George Mason University" },
      { key: "graduated", span: "May 2026", value: "2026-05" },
      { key: "research_role", span: "graduate research assistant", value: "Graduate Research Assistant" },
      { key: "prior_employer", span: "Langscape", value: "Langscape" },
      { key: "seeking", span: "full-time software and AI engineering roles", value: "full-time, software / AI" },
    ],
  },

  about: [
    "I'm a recent Computer Science graduate (M.S., George Mason University, May 2026) with hands-on experience in Python, machine learning, and large language models. As a Graduate Research Assistant, I built large-scale pipelines that extract structured financial data from over a million SEC filings using LLMs on GCP / Vertex AI.",
    "Before my master's, I worked as a software engineer at Langscape in Chennai on machine translation APIs built with Python and FastAPI. I love tackling unstructured data problems and building things that hold up in production, not just in notebooks.",
    "I'm now looking for full-time software and AI engineering roles where I can keep solving hard problems at scale.",
  ],

  experience: [
    {
      role: "Graduate Research Assistant",
      company: "George Mason University, Costello College of Business",
      period: "Sep 2025 to May 2026",
      location: "United States",
      points: [
        "Built large-scale pipelines that extract structured financial data from over a million SEC filings using large language models.",
        "Ran LLM extraction workloads on Google Cloud Platform with Vertex AI.",
      ],
      tech: ["Python", "LLMs", "GCP", "Vertex AI", "Prompt Engineering"],
    },
    {
      role: "Software Engineer Intern",
      company: "Langscape",
      period: "Sep 2023 to Feb 2024",
      location: "Chennai, India",
      points: [
        "Engineered scalable AI-powered machine translation APIs in Python serving daily requests across 10+ language pairs, improving response time by 35%.",
        "Optimized neural machine translation models with PyTorch and TensorFlow, raising BLEU scores by 10% and cutting translation errors by 18% on critical business documents.",
        "Built a real-time quality assessment dashboard in React and JavaScript to monitor translation accuracy, reducing customer complaints by 25%.",
      ],
      tech: ["Python", "FastAPI", "PyTorch", "TensorFlow", "React", "JavaScript"],
    },
  ],

  projects: [
    {
      title: "Number Quest",
      context: "Nerdy AI Hackathon",
      description:
        "A K-5 math platform that diagnoses why an answer is wrong, not just that it is: tested simulators of known student misconceptions pinpoint the mistake and target the hint. 4 skill workshops and 15 card games against a computer opponent; an LLM may only reword hints that pass rule checks.",
      tech: ["Python", "FastAPI", "React", "TypeScript", "Tailwind", "SQLite", "Qwen2.5"],
      link: "",
      repo: "https://github.com/vidyasagar17/hackathon",
    },
    {
      title: "TrustLens",
      context: "",
      description:
        "Real-time news claim verification. Queries GDELT for matching articles, filters them through a trusted-domain allowlist built from public reliability datasets, scores corroboration across independent outlets, and writes a citation-backed report with a local LLaMA model.",
      tech: ["Python", "FastAPI", "GDELT", "llama.cpp", "LLMs"],
      link: "",
      repo: "https://github.com/vidyasagar17/TrustLens-GDELT-Real-Time-News-Verification-System",
    },
    {
      title: "Prelegal",
      context: "",
      description:
        "AI assistant for drafting legal agreements. Chat to identify which of 11 standard agreements you need, fill in fields conversationally, preview live, and export to PDF. Next.js frontend and FastAPI backend shipped as a single Docker container.",
      tech: ["TypeScript", "Next.js", "FastAPI", "LiteLLM", "Docker", "SQLite"],
      link: "",
      repo: "https://github.com/vidyasagar17/prelegal",
    },
    {
      title: "Story-to-Illustration Agent",
      context: "",
      description:
        "Agent pipeline that turns plain-text stories into illustrated storybooks. The original version used GPT-4o-mini and DALL·E 2; the RAG edition moves to open-source LLMs and diffusion models with a retrieval memory that keeps characters and art style consistent.",
      tech: ["Python", "Agents", "RAG", "Stable Diffusion", "GPT-4o-mini"],
      link: "",
      repo: "https://github.com/vidyasagar17/multi-modal-story-to-illustration-rag",
    },
    {
      title: "Heterogeneous Algorithmic Collusion",
      context: "",
      description:
        "Replicates and extends Calvano et al. (2020) on AI pricing collusion. Pits Q-learning, DQN, and PPO agents against each other in a Bertrand pricing game to test whether collusion survives when competing algorithms differ.",
      tech: ["Python", "Reinforcement Learning", "DQN", "PPO"],
      link: "",
      repo: "https://github.com/vidyasagar17/Dqn-learning",
    },
    {
      title: "Stroke Risk Prediction",
      context: "",
      description:
        "Stacked ensemble (Logistic Regression, Random Forest, XGBoost, CatBoost) with SMOTE for class imbalance and Optuna tuning, with the decision threshold optimized for recall via F2 score.",
      tech: ["Python", "scikit-learn", "XGBoost", "CatBoost", "Optuna"],
      link: "",
      repo: "https://github.com/vidyasagar17/Stroke-prediction",
    },
    {
      title: "Mission:Hire",
      context: "Team Caffeine Addicts",
      description: "AI-powered talent memory platform built on Salesforce.",
      tech: ["Salesforce", "AI"],
      link: "",
      repo: "https://github.com/vidyasagar17/caffeine-addicts-missionhire",
    },
  ],

  skills: {
    Languages: ["Python", "JavaScript", "TypeScript"],
    "AI & LLMs": ["Large Language Models", "Prompt Engineering", "Agentic Workflows", "RAG", "NLP / Machine Translation"],
    "Machine learning": ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Reinforcement Learning"],
    "Backend & cloud": ["FastAPI", "GCP", "Vertex AI", "Docker", "SQLite"],
    Frontend: ["React", "Next.js"],
  },

  education: [
    {
      degree: "M.S. Computer Science",
      school: "George Mason University",
      period: "Aug 2024 to May 2026",
      detail: "",
    },
    {
      degree: "B.Tech, Computational Science",
      school: "SRM Institute of Science and Technology (SRMIST)",
      period: "",
      detail: "",
    },
  ],

  certifications: [
    // { name: "Certification Name", issuer: "Issuer", year: "2024", link: "" },
  ],

  contactNote:
    "I'm open to full-time software and AI engineering roles. Email is the fastest way to reach me.",
};
