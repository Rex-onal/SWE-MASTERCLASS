export interface Resource {
  topic: string;
  name: string;
  platform: string;
  type: "YouTube" | "Course" | "Text/Web" | "Text/Web/Course";
  duration: string;
  url: string;
}

export interface Phase {
  id: number;
  title: string;
  durationLabel: string;
  goal: string;
  projectDescription: string;
  resources: Resource[];
}

export const AI_ENGINEERING_PHASES: Phase[] = [
  {
    id: 1,
    title: "Python: Zero to Production",
    durationLabel: "Months 1–3",
    goal: "Go from zero Python to writing production-level Python code",
    projectDescription: "Build a Python CLI tool that calls a REST API, handles JSON responses, and includes proper error handling",
    resources: [
      {
        topic: "Python Basics — Full Beginner Course",
        name: "Learn Python Full Course for Beginners",
        platform: "freeCodeCamp",
        type: "YouTube",
        duration: "4.5 hours",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      },
      {
        topic: "Python Intermediate — OOP, Data Structures, Error Handling",
        name: "Python OOP Tutorials — Corey Schafer",
        platform: "Corey Schafer",
        type: "YouTube",
        duration: "2–3 hours",
        url: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM",
      },
      {
        topic: "Python for Everybody — APIs, JSON, File Handling",
        name: "Python for Everybody Full University Course",
        platform: "freeCodeCamp",
        type: "YouTube",
        duration: "13 hours",
        url: "https://www.youtube.com/watch?v=8DvywoWv6fI",
      },
      {
        topic: "FastAPI — Building Production APIs with Python",
        name: "FastAPI Course for Beginners",
        platform: "freeCodeCamp",
        type: "YouTube",
        duration: "1 hour",
        url: "https://www.youtube.com/watch?v=tLKKmouUams",
      },
      {
        topic: "FastAPI Advanced — Full API with Auth and Database",
        name: "FastAPI Full Course — Beginner to Advanced",
        platform: "freeCodeCamp",
        type: "YouTube",
        duration: "19 hours",
        url: "https://www.youtube.com/watch?v=0sOvCWFmrtA",
      },
      {
        topic: "Python Text Resource — Official Docs",
        name: "Python Official Documentation",
        platform: "python.org",
        type: "Text/Web",
        duration: "Reference",
        url: "https://docs.python.org/3/tutorial/index.html",
      },
    ],
  },
  {
    id: 2,
    title: "LLM APIs + Prompt Engineering",
    durationLabel: "Months 4–6",
    goal: "Learn to work with LLM APIs and engineer reliable prompts",
    projectDescription: "Build a chatbot using OpenAI or Anthropic API with system prompts, few-shot examples, and conversation memory",
    resources: [
      {
        topic: "Prompt Engineering for Developers",
        name: "ChatGPT Prompt Engineering for Developers",
        platform: "DeepLearning.AI",
        type: "Course",
        duration: "1–2 hours",
        url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
      },
      {
        topic: "Building Systems with LLM APIs",
        name: "Building Systems with the ChatGPT API",
        platform: "DeepLearning.AI",
        type: "Course",
        duration: "2–3 hours",
        url: "https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/",
      },
      {
        topic: "LangChain for LLM Application Development",
        name: "LangChain for LLM Application Development",
        platform: "DeepLearning.AI",
        type: "Course",
        duration: "2–3 hours",
        url: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/",
      },
      {
        topic: "LangChain Full Mastery Course 2025",
        name: "LangChain Mastery in 2025 — Full 5 Hour Course",
        platform: "YouTube",
        type: "YouTube",
        duration: "5 hours",
        url: "https://www.youtube.com/watch?v=Cyv-dgv80kE",
      },
      {
        topic: "Anthropic API — Official Docs",
        name: "Anthropic Claude API Documentation",
        platform: "Anthropic",
        type: "Text/Web",
        duration: "Reference",
        url: "https://docs.anthropic.com/en/docs/get-started",
      },
      {
        topic: "OpenAI API — Official Docs",
        name: "OpenAI API Documentation",
        platform: "OpenAI",
        type: "Text/Web",
        duration: "Reference",
        url: "https://platform.openai.com/docs/introduction",
      },
    ],
  },
  {
    id: 3,
    title: "RAG + Vector Databases + Docker",
    durationLabel: "Months 7–10",
    goal: "Build production AI systems using RAG, vector databases, and Docker",
    projectDescription: "Build a RAG system that ingests documents, stores them in a vector database, and answers questions with source citations",
    resources: [
      {
        topic: "RAG from Scratch — Full Tutorial",
        name: "Learn RAG From Scratch — From a LangChain Engineer",
        platform: "freeCodeCamp",
        type: "YouTube",
        duration: "1.5 hours",
        url: "https://www.youtube.com/watch?v=sVcwVQRHIc8",
      },
      {
        topic: "Build Your First RAG App with LangChain",
        name: "Build Your First RAG App — LangChain + OpenAI 2025",
        platform: "YouTube",
        type: "YouTube",
        duration: "1–2 hours",
        url: "https://www.youtube.com/watch?v=rS_ksLkhIrM",
      },
      {
        topic: "Complete RAG Crash Course with LangChain",
        name: "Complete RAG Crash Course With LangChain In 2 Hours",
        platform: "YouTube",
        type: "YouTube",
        duration: "2 hours",
        url: "https://www.youtube.com/watch?v=o126p1QN_RI",
      },
      {
        topic: "Building RAG Agents with LLMs",
        name: "Building Agentic RAG with LlamaIndex",
        platform: "DeepLearning.AI",
        type: "Course",
        duration: "2 hours",
        url: "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/",
      },
      {
        topic: "Docker for Beginners",
        name: "Docker Tutorial for Beginners — Full DevOps Course",
        platform: "freeCodeCamp",
        type: "YouTube",
        duration: "2 hours",
        url: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
      },
      {
        topic: "Docker Crash Course",
        name: "Docker Crash Course for Absolute Beginners",
        platform: "TechWorld with Nana",
        type: "YouTube",
        duration: "1 hour",
        url: "https://www.youtube.com/watch?v=pg19Z8LL06w",
      },
      {
        topic: "Vector Databases & Embeddings — Text Resource",
        name: "Pinecone Learn — Vector Database Guide",
        platform: "Pinecone",
        type: "Text/Web",
        duration: "Reference",
        url: "https://www.pinecone.io/learn/vector-database/",
      },
    ],
  },
  {
    id: 4,
    title: "AI Agents + Multi-Agent Systems",
    durationLabel: "Months 11–15",
    goal: "Build autonomous AI agents and multi-agent systems using LangGraph, CrewAI, and MCP",
    projectDescription: "Build a multi-agent system that takes a topic, researches it using web tools, and writes a structured report with an audit trail",
    resources: [
      {
        topic: "AI Agents in LangGraph",
        name: "AI Agents in LangGraph",
        platform: "DeepLearning.AI",
        type: "Course",
        duration: "2–3 hours",
        url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
      },
      {
        topic: "Multi-Agent Systems with CrewAI",
        name: "Multi AI Agent Systems with CrewAI",
        platform: "DeepLearning.AI",
        type: "Course",
        duration: "2–3 hours",
        url: "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/",
      },
      {
        topic: "LangGraph Complete Course — Beginner to Advanced",
        name: "LangGraph Complete Course for Beginners",
        platform: "YouTube",
        type: "YouTube",
        duration: "3 hours",
        url: "https://www.youtube.com/watch?v=jGg_1h0qzaM",
      },
      {
        topic: "LangGraph Full Tutorial 2026",
        name: "Complete LangGraph Tutorial Beginner to Advanced 2026",
        platform: "YouTube",
        type: "YouTube",
        duration: "Full course",
        url: "https://www.youtube.com/watch?v=Hz21KVo0t4E",
      },
      {
        topic: "MCP — Model Context Protocol Explained",
        name: "Model Context Protocol Explained in 20 Minutes",
        platform: "YouTube",
        type: "YouTube",
        duration: "20 minutes",
        url: "https://www.youtube.com/watch?v=N3vHJcHBS-w",
      },
      {
        topic: "MCP — You Need to Learn This Now",
        name: "You Need to Learn MCP Right Now",
        platform: "YouTube",
        type: "YouTube",
        duration: "30 minutes",
        url: "https://www.youtube.com/watch?v=GuTcle5edjk",
      },
      {
        topic: "Agentic AI Full Course — LangChain, LangGraph, RAG",
        name: "Complete Agentic AI Course in 10 Hours",
        platform: "YouTube",
        type: "YouTube",
        duration: "10 hours",
        url: "https://www.youtube.com/watch?v=rV3HJ4LEZ7k",
      },
      {
        topic: "LangGraph Academy — Official Free Course",
        name: "LangChain Academy — Introduction to LangGraph",
        platform: "LangChain Academy",
        type: "Text/Web/Course",
        duration: "Self-paced",
        url: "https://academy.langchain.com/courses/intro-to-langgraph",
      },
      {
        topic: "Hugging Face AI Agents Course — Free with Certificate",
        name: "Hugging Face AI Agents Course",
        platform: "Hugging Face",
        type: "Course",
        duration: "Self-paced",
        url: "https://huggingface.co/learn/agents-course/unit0/introduction",
      },
    ],
  },
];
