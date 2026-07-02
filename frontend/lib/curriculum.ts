import { Week, Phase, Project, InterviewQuestion } from "./types";

export const PHASES: Phase[] = [
  { number: 1, name: "How Software Works", weekRange: "Weeks 1–3" },
  { number: 2, name: "Databases, Auth & Backend", weekRange: "Weeks 4–5" },
  { number: 3, name: "DSA Drills", weekRange: "Weeks 6–10" },
  { number: 4, name: "System Design", weekRange: "Weeks 11–13" },
  { number: 5, name: "AI Engineering", weekRange: "Weeks 14–16" },
  { number: 6, name: "Production & Scale", weekRange: "Weeks 17–18" }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    number: "01",
    name: "Personal Tech Glossary App",
    difficulty: "Easy",
    tags: ["HTML", "JavaScript", "CSS", "localStorage"],
    phase: "Phase 1",
    status: "Not Started",
    brief: "Build a single-page dictionary application where you explain core web terms (HTTP, DNS, TCP) in your own words. Features search filtering, bookmarking, and local persistence.",
    deliverables: [
      "Responsive layout styled using standard CSS variables",
      "Real-time client-side search filtering",
      "Favorites/bookmark system saved in localStorage",
      "Clean README documenting architecture and what you learned"
    ]
  },
  {
    id: "p2",
    number: "02",
    name: "HTTP Request Inspector",
    difficulty: "Medium",
    tags: ["React", "Next.js Route Handlers", "Fetch API"],
    phase: "Phase 2",
    status: "Not Started",
    brief: "Create an HTTP client-side inspector dashboard that allows you to trigger GET/POST requests with custom headers, query params, and bodies, sending them to httpbin.org and inspecting response headers, cookies, and payloads.",
    deliverables: [
      "Header editor with dynamic row addition/deletion",
      "Format highlight viewer for returned JSON response body",
      "Timing indicator displaying request latency in ms",
      "History list of past 10 inspected requests saved in localStorage"
    ]
  },
  {
    id: "p3",
    number: "03",
    name: "Task Manager with Database",
    difficulty: "Medium",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    phase: "Phase 4",
    status: "Not Started",
    brief: "Develop a full-stack Task Manager. Instead of localStorage, tasks are stored in a real PostgreSQL database provided by Supabase. Includes email authentication and task categorization.",
    deliverables: [
      "Database schema defined with relational integrity",
      "Row Level Security (RLS) policies implemented in Supabase",
      "Interactive kanban/list board for Task status transitions",
      "User authentication state middleware routing in Next.js"
    ]
  },
  {
    id: "p4",
    number: "04",
    name: "AI Prompt Playground",
    difficulty: "Medium",
    tags: ["Next.js", "OpenAI SDK", "Vercel AI SDK", "Framer Motion"],
    phase: "Phase 5",
    status: "Not Started",
    brief: "Build a prompt playground where users can save prompt templates, swap variable placeholders (e.g. {{topic}}), select temperature, and stream model responses side-by-side to compare outputs.",
    deliverables: [
      "Template rendering engine replacing placeholders dynamically",
      "Parallel chat components with model selector",
      "Historical logs of generated outputs with cost estimation",
      "Sleek UI showing tokens generated per second and streaming state"
    ]
  },
  {
    id: "p5",
    number: "05",
    name: "RAG Semantic Search Engine",
    difficulty: "Hard",
    tags: ["Next.js", "Vector DB", "Embeddings API", "Pinecone"],
    phase: "Phase 5",
    status: "Not Started",
    brief: "Create a Q&A tool that retrieves private document contexts using pgvector or Pinecone. Users upload text files, the app chunks them, stores embeddings, and answers queries with strict source attributions.",
    deliverables: [
      "File uploader and client-side or api-side chunking logic",
      "Pinecone index queries integrating cosine similarity matches",
      "LLM prompt context injection incorporating matched text blocks",
      "Source highlights rendering with file name and matching block snippets"
    ]
  },
  {
    id: "p6",
    number: "06",
    name: "Capstone: AI Career Copilot",
    difficulty: "Hard",
    tags: ["Full Stack", "AI Agents", "Tailwind CSS", "localStorage"],
    phase: "Phase 6",
    status: "Not Started",
    brief: "Assemble your master project: an interactive career portal that reads all your completed masterclass metrics, logs your completed projects, parses your resume, and provides automated interview mock evaluations.",
    deliverables: [
      "Dashboard integrating all progress metrics from the app",
      "Interactive resume parser simulating JSON extraction",
      "Agentic mock interviewer with voice playback/speech simulation",
      "Clean deployment live on Vercel with structured documentation"
    ]
  }
];

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: "i1",
    text: "Reverse a Singly Linked List in place.",
    difficulty: "Easy",
    type: "dsa",
    topic: "Linked Lists"
  },
  {
    id: "i2",
    text: "Find the maximum sum subarray of size k (Sliding Window).",
    difficulty: "Easy",
    type: "dsa",
    topic: "Arrays & Pointers"
  },
  {
    id: "i3",
    text: "Verify if a Binary Search Tree is a valid BST (DFS).",
    difficulty: "Medium",
    type: "dsa",
    topic: "Trees"
  },
  {
    id: "i4",
    text: "Find the shortest path in an unweighted graph (BFS).",
    difficulty: "Medium",
    type: "dsa",
    topic: "Graphs"
  },
  {
    id: "i5",
    text: "Design and implement a custom LRU Cache with O(1) operations.",
    difficulty: "Hard",
    type: "dsa",
    topic: "Hashing & Lists"
  },
  {
    id: "i6",
    text: "Design a global URL shortener (TinyURL) with high redirect volume.",
    difficulty: "Easy",
    type: "system",
    topic: "API & URL Routing"
  },
  {
    id: "i7",
    text: "Design a rate limiter for an API Gateway supporting 10k requests/sec.",
    difficulty: "Medium",
    type: "system",
    topic: "Scalability & Cache"
  },
  {
    id: "i8",
    text: "Design swiggy/zomato live delivery tracking system at scale.",
    difficulty: "Medium",
    type: "system",
    topic: "Geospatial & Streams"
  },
  {
    id: "i9",
    text: "Design a notification system (push, email, SMS) with retry loops.",
    difficulty: "Medium",
    type: "system",
    topic: "Message Queues"
  },
  {
    id: "i10",
    text: "Design a distributed key-value store (like Redis) supporting replication.",
    difficulty: "Hard",
    type: "system",
    topic: "Distributed Systems"
  },
  {
    id: "i11",
    text: "Explain RAG (Retrieval-Augmented Generation) and how embedding vectors are retrieved.",
    difficulty: "Easy",
    type: "ai",
    topic: "Embeddings & Vectors"
  },
  {
    id: "i12",
    text: "How does temperature affect LLM response consistency, and how do you lock it for testing?",
    difficulty: "Easy",
    type: "ai",
    topic: "LLM Parameters"
  },
  {
    id: "i13",
    text: "How do you mitigate prompt injection and leak of system prompts in an LLM app?",
    difficulty: "Medium",
    type: "ai",
    topic: "AI Security"
  },
  {
    id: "i14",
    text: "What is the difference between fine-tuning and in-context learning?",
    difficulty: "Medium",
    type: "ai",
    topic: "Model Training"
  },
  {
    id: "i15",
    text: "How does chunk size and overlap impact semantic search in RAG pipelines?",
    difficulty: "Medium",
    type: "ai",
    topic: "Data Chunking"
  },
  {
    id: "i16",
    text: "Design a system that parses unstructured resume PDFs using JSON mode / structured outputs.",
    difficulty: "Medium",
    type: "ai",
    topic: "Structured Outputs"
  },
  {
    id: "i17",
    text: "Explain how semantic cache (caching embeddings) speeds up LLM applications.",
    difficulty: "Medium",
    type: "ai",
    topic: "Caching Embeddings"
  },
  {
    id: "i18",
    text: "How would you design a rate limiter for OpenAI API calls to handle rate limits (TPM/RPM)?",
    difficulty: "Medium",
    type: "ai",
    topic: "API Limits"
  },
  {
    id: "i19",
    text: "What are LLM hallucination checks and how can you evaluate generated outputs?",
    difficulty: "Hard",
    type: "ai",
    topic: "AI Evaluation"
  },
  {
    id: "i20",
    text: "Design a multi-agent routing system for a customer support agent workflow.",
    difficulty: "Hard",
    type: "ai",
    topic: "Agentic Workflows"
  }
];

export const WEEKS: Week[] = [
  {
    id: 1,
    title: "How the Internet Works",
    phase: 1,
    modules: [
      {
        id: "w1-m1",
        weekId: 1,
        title: "How the Internet Works: HTTP, DNS & TCP/IP",
        track: "A",
        trackName: "Concept",
        realWorldContext: "Every request your app makes — from calling an API to loading a page — travels through this exact stack. Google, Amazon, every product you use runs on these protocols.",
        companyName: "Cloudflare",
        companyContext: "Cloudflare operates one of the world's largest DNS networks, resolving trillions of queries daily. Understanding DNS propagation is vital to setting up CDNs and configuring web routing.",
        resources: [
          { id: "r1", title: "What is DNS? (and how it makes the Internet work)", type: "video", duration: "25 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=NiQTs9DbtW4" },
          { id: "r2", title: "HTTP Crash Course from Basics to Advanced — Part 1", type: "video", duration: "45 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=yk2YVIC-OeQ" },
          { id: "r3", title: "MDN Web Docs — How the Web Works", type: "article", duration: "15 min read", source: "developer.mozilla.org", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works" },
          { id: "r4", title: "Cloudflare — How Does the Internet Work?", type: "article", duration: "10 min read", source: "cloudflare.com", url: "https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/" },
          { id: "r5", title: "Cloudflare — What is DNS?", type: "article", duration: "10 min read", source: "cloudflare.com", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
          { id: "r6", title: "How DNS Works — Interactive Comic", type: "article", duration: "8 min", source: "howdns.works", url: "https://howdns.works/" }
        ],
        questions: [
          {
            id: "q1",
            text: "What does DNS stand for and what does it do?",
            options: ["Domain Name System — translates domain names to IP addresses", "Data Network Service — routes packets", "Domain Network Server — hosts websites", "Digital Name Server — encrypts traffic"],
            correctIndex: 0
          },
          {
            id: "q2",
            text: "What is the difference between HTTP and HTTPS?",
            options: ["HTTPS is faster", "HTTPS adds encryption via TLS/SSL", "HTTP supports images, HTTPS does not", "They are the same protocol"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "What happens first when you type google.com in your browser?",
            options: ["A TCP connection is opened", "An HTTP request is sent", "A DNS lookup resolves the domain to an IP address", "The browser checks its cache for HTML"],
            correctIndex: 2
          },
          {
            id: "q4",
            text: "What does TCP guarantee that UDP does not?",
            options: ["Faster delivery", "Packet delivery order and reliability", "Encryption", "Fewer hops between servers"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "What is a status code of 404?",
            options: ["Server error", "Redirect", "Success", "Resource not found"],
            correctIndex: 3
          }
        ]
      },
      {
        id: "w1-m2",
        weekId: 1,
        title: "Reading Code You Didn't Write + Directing AI",
        track: "D",
        trackName: "AI Direction",
        realWorldContext: "Engineers who use AI effectively are not the ones who accept every output — they are the ones who can read, predict, and audit what the AI writes before running it.",
        companyName: "GitHub & Anthropic",
        companyContext: "Product engineers at GitHub use Copilot, but the best developers audit outputs line-by-line, validating edge cases and using prompt specs to enforce strict design styles.",
        resources: [
          { id: "r1", title: "The SECRET To Reading Code That's UNFAMILIAR", type: "video", duration: "18 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=L_ycOPmaZTo" },
          { id: "r2", title: "AI Coding 101: How To Read AI-Generated Code", type: "video", duration: "22 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=w-ay5abSPZE" },
          { id: "r3", title: "AI codes better than me. Now what?", type: "video", duration: "15 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=UrNLVip0hSA" },
          { id: "r4", title: "A Complete Beginner's Guide to Coding with AI", type: "video", duration: "45 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=k0gmTOm1eus" },
          { id: "r5", title: "Anthropic Prompt Engineering Guide", type: "article", duration: "20 min read", source: "docs.anthropic.com", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" }
        ],
        questions: [
          {
            id: "q1",
            text: "Before running AI-generated code you should:",
            options: ["Trust it and run immediately", "Read it line by line and predict what it does", "Delete and rewrite it yourself", "Only run it if it's under 10 lines"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What is a 'spec-first' prompt?",
            options: ["A prompt with no context", "Prompting AI with Context, Problem, Constraints, and Desired Output", "A one-line prompt for simple tasks", "A prompt that includes your API key"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "The three questions to ask before accepting AI code are:",
            options: ["Is it short? Is it fast? Is it tested?", "What does it do? Why this approach? What would break it?", "Who wrote it? When? Why?", "Does it compile? Does it pass linting? Is it documented?"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "Chain of thought prompting means:",
            options: ["Sending multiple API requests", "Asking the AI to reason step by step before answering", "Chaining multiple AI tools together", "Linking prompts to external documents"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "If you can't explain what an AI-generated function does, you should:",
            options: ["Deploy it and see what happens", "Delete it and ask AI to rewrite", "Study that piece before moving on", "Add a comment saying 'AI wrote this'"],
            correctIndex: 2
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Web App Structure",
    phase: 1,
    modules: [
      {
        id: "w2-m1",
        weekId: 2,
        title: "How Web Apps Are Built: Frontend, Backend, DB & REST",
        track: "A",
        trackName: "Concept",
        realWorldContext: "Every product you will build or work on runs on this exact structure. Understanding how components request data lets you design resilient integrations.",
        companyName: "swiggy",
        companyContext: "Swiggy divides their client applications into highly optimized components that call REST and gRPC API backends to query Postgres and Redis caches in real time.",
        resources: [
          { id: "r1", title: "APIs for Beginners — How to Use an API (Full Course) — freeCodeCamp", type: "video", duration: "2 hrs", source: "youtube.com", url: "https://www.youtube.com/watch?v=GZvSYJDk-us" },
          { id: "r2", title: "REST API Crash Course — Introduction + Full Python API Tutorial", type: "video", duration: "1 hr", source: "youtube.com", url: "https://www.youtube.com/watch?v=qbLc5a9jdXo" },
          { id: "r3", title: "What is REST? — restfulapi.net", type: "article", duration: "10 min read", source: "restfulapi.net", url: "https://restfulapi.net/" },
          { id: "r4", title: "Codecademy — What is Back-End Architecture?", type: "article", duration: "12 min read", source: "codecademy.com", url: "https://www.codecademy.com/article/back-end-architecture" },
          { id: "r5", title: "Web Application Architecture: Frontend, Middleware, Backend", type: "article", duration: "10 min read", source: "dev.to", url: "https://dev.to/techelopment/web-application-architecture-front-end-middleware-and-back-end-2ld7" }
        ],
        questions: [
          {
            id: "q1",
            text: "What does REST stand for?",
            options: ["Rapid Endpoint Service Transfer", "Representational State Transfer", "Remote Execution Standard Technology", "Reliable Event Streaming Technology"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What HTTP method is used to CREATE a new resource?",
            options: ["GET", "PUT", "POST", "DELETE"],
            correctIndex: 2
          },
          {
            id: "q3",
            text: "Which part of a web app handles database queries and business logic?",
            options: ["The frontend", "The browser", "The backend/server", "The CDN"],
            correctIndex: 2
          },
          {
            id: "q4",
            text: "What does an API endpoint return most commonly in modern web apps?",
            options: ["HTML", "XML", "JSON", "Plain text"],
            correctIndex: 2
          },
          {
            id: "q5",
            text: "What is the difference between GET and POST?",
            options: ["GET is secure, POST is not", "GET retrieves data, POST sends data to create/update", "GET is faster always", "POST is read-only"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced AI Direction + Project 1 Launch",
    phase: 1,
    modules: [
      {
        id: "w3-m1",
        weekId: 3,
        title: "Project 1: Personal Tech Glossary App",
        track: "C",
        trackName: "Build",
        realWorldContext: "Your first deployed project. Forces you to restate everything you've learned in your own words — and proves you can build and ship a client-side database-driven product from scratch.",
        companyName: "Vercel",
        companyContext: "Vercel hosts millions of projects by integrating directly with GitHub. Deploying static web structures triggers their global CDN network for sub-100ms load speeds.",
        resources: [
          { id: "r1", title: "MDN — localStorage API", type: "article", duration: "8 min read", source: "developer.mozilla.org", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" },
          { id: "r2", title: "Vercel — Deploy Your First Project", type: "article", duration: "10 min", source: "vercel.com", url: "https://vercel.com/docs/getting-started-with-vercel" },
          { id: "r3", title: "MDN — Fetch API", type: "article", duration: "10 min read", source: "developer.mozilla.org", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" }
        ],
        questions: [
          {
            id: "q1",
            text: "Where does Project 1 store its data?",
            options: ["A PostgreSQL database", "A backend server", "localStorage in the browser", "A JSON file on disk"],
            correctIndex: 2
          },
          {
            id: "q2",
            text: "What does deploying to Vercel give you?",
            options: ["A free database", "A live public URL for your project", "User authentication", "A paid API key"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "A good project README must include:",
            options: ["Your personal phone number", "What it does, why you built it, tech stack, architecture, live demo link", "Only the tech stack", "A list of all files in the project"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What does localStorage.setItem() do?",
            options: ["Fetches data from a server", "Saves a key-value pair in the browser that persists after refresh", "Sends data to an API", "Deletes all stored data"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "Real-time search filtering on a list means:",
            options: ["Sending a request to the server on every keystroke", "Filtering the existing data array in the browser as the user types", "Reloading the page on every input", "Using a third-party search API"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Databases: SQL vs NoSQL, Schemas, Queries, Indexing",
    phase: 2,
    modules: [
      {
        id: "w4-m1",
        weekId: 4,
        title: "Databases: SQL, NoSQL, Schemas & Indexing",
        track: "A",
        trackName: "Concept",
        realWorldContext: "Flipkart, Swiggy, Swappy all make deliberate relational vs non-relational database choices. Knowing how indices reduce disk reads determines whether your database crashes during peak sales.",
        companyName: "swappy",
        companyContext: "Swappy relies on PostgreSQL to process transactions securely with ACID consistency, while using MongoDB for flexible unstructured catalog structures.",
        resources: [
          { id: "r1", title: "SQL Course for Beginners [Full Course] — Programming with Mosh", type: "video", duration: "3 hrs", source: "youtube.com", url: "https://www.youtube.com/watch?v=7S_tz1z_5bA" },
          { id: "r2", title: "Learn Database Normalization Fast — 1NF, 2NF, 3NF Explained Simply", type: "video", duration: "20 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=FzVCGou8SMA" },
          { id: "r3", title: "Database Sharding and Partitioning — Arpit Bhayani", type: "video", duration: "30 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=wXvljefXyEo" },
          { id: "r4", title: "SQL Table Partitioning (Visually Explained)", type: "video", duration: "18 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=tQQ3XwrKbfM" },
          { id: "r5", title: "W3Schools SQL Tutorial — interactive exercises", type: "article", duration: "self-paced", source: "w3schools.com", url: "https://www.w3schools.com/sql/" },
          { id: "r6", title: "SQLZoo — interactive SQL practice", type: "article", duration: "self-paced", source: "sqlzoo.net", url: "https://sqlzoo.net/" }
        ],
        questions: [
          {
            id: "q1",
            text: "When should you choose NoSQL over SQL?",
            options: ["Always — NoSQL is better", "When your data is highly relational and structured", "When you need flexible schemas, high write throughput, or document storage", "When you need ACID transactions"],
            correctIndex: 2
          },
          {
            id: "q2",
            text: "What does database normalization prevent?",
            options: ["Slow queries", "Data duplication and update anomalies", "Index bloat", "Schema migrations"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "What is a database index and why does it matter?",
            options: ["A backup copy of the database", "A data structure that speeds up read queries at the cost of write speed", "A foreign key constraint", "A way to partition data across servers"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What is database sharding?",
            options: ["Encrypting sensitive columns", "Splitting a large database across multiple servers based on a shard key", "Creating read replicas", "Normalizing a table to 3NF"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "In a relational database, a foreign key:",
            options: ["Encrypts a column", "Creates an index automatically", "Links a row in one table to a row in another table", "Prevents duplicate rows"],
            correctIndex: 2
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "APIs & Authentication: REST, JWT, OAuth, Env Vars",
    phase: 2,
    modules: [
      {
        id: "w5-m1",
        weekId: 5,
        title: "Authentication: JWT, OAuth & Securing Your API",
        track: "A",
        trackName: "Concept",
        realWorldContext: "Every app with users needs auth. JWTs allow stateless verification, removing the need for session databases. Learn the signature system cold.",
        companyName: "Razorpay",
        companyContext: "Razorpay validates merchant API keys on the gateway using HMAC verification, ensuring secure transactional operations with zero state checks on database instances.",
        resources: [
          { id: "r1", title: "Authentication Explained: When to Use Basic, Bearer, OAuth2, JWT & SSO", type: "video", duration: "35 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=9JPnN1Z_iSY" },
          { id: "r2", title: "API Authentication: JWT, OAuth2, and More", type: "video", duration: "25 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=xJA8tP74KD0" },
          { id: "r3", title: "API Authentication EXPLAINED! OAuth vs JWT vs API Keys", type: "video", duration: "20 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=GcVtElYa17s" },
          { id: "r4", title: "FastAPI JWT Authentication 2025", type: "video", duration: "40 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=I11jbMOCY0c" },
          { id: "r5", title: "JWT.io — Introduction to JSON Web Tokens (official)", type: "article", duration: "10 min read", source: "jwt.io", url: "https://jwt.io/introduction" },
          { id: "r6", title: "OAuth 2.0 Simplified — Aaron Parecki", type: "article", duration: "15 min read", source: "oauth.com", url: "https://www.oauth.com/" },
          { id: "r7", title: "Vercel Docs — Environment Variables", type: "article", duration: "8 min read", source: "vercel.com", url: "https://vercel.com/docs/environment-variables" }
        ],
        questions: [
          {
            id: "q1",
            text: "What is a JWT and what are its three parts?",
            options: ["A session cookie; header, body, signature", "A JSON Web Token; header, payload, signature", "A JavaScript token; key, value, expiry", "A Java Web Token; issuer, subject, audience"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What is the main difference between authentication and authorization?",
            options: ["They are the same thing", "Authentication verifies who you are; authorization determines what you can do", "Authentication is for APIs; authorization is for UIs", "Authorization uses JWT; authentication uses OAuth"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "Why should API keys never be in your frontend code?",
            options: ["They slow down the browser", "Frontend code is public — anyone can see and steal your key", "They are too long to include in code", "They only work server-side"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What does OAuth 2.0 allow a user to do?",
            options: ["Log in with a username and password", "Grant a third-party app limited access to their account without sharing their password", "Encrypt their data in transit", "Generate a JWT automatically"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "What does an environment variable do?",
            options: ["Changes the Node.js version", "Stores secrets like API keys outside your codebase so they are not committed to GitHub", "Sets the timezone of the server", "Controls which port the app runs on"],
            correctIndex: 1
          }
        ]
      },
      {
        id: "w5-m2",
        weekId: 5,
        title: "Project 2: HTTP Request Inspector",
        track: "C",
        trackName: "Build",
        realWorldContext: "Proves you understand the full HTTP cycle — not just that it exists, but how to expose, modify, and explain request parameters.",
        companyName: "Postman",
        companyContext: "Postman grew to a multi-billion dollar platform by building a request inspector. Understanding headers and responses lets you build professional developer tooling.",
        resources: [
          { id: "r1", title: "httpbin.org — Free HTTP Request Testing API", type: "article", duration: "reference", source: "httpbin.org", url: "https://httpbin.org/" },
          { id: "r2", title: "MDN — Fetch API", type: "article", duration: "10 min read", source: "developer.mozilla.org", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
          { id: "r3", title: "Vercel — Deploy Your First Project", type: "article", duration: "10 min", source: "vercel.com", url: "https://vercel.com/docs/getting-started-with-vercel" }
        ],
        questions: [
          {
            id: "q1",
            text: "What does a 200 status code mean?",
            options: ["Redirect", "Not found", "Server error", "Request was successful"],
            correctIndex: 3
          },
          {
            id: "q2",
            text: "What is a request header used for?",
            options: ["The main body of content", "Metadata about the request such as content type, auth token, and accepted formats", "The URL path", "The query string"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "Why do browsers block cross-origin requests by default?",
            options: ["To make APIs faster", "CORS prevents malicious sites from making requests using your cookies", "To reduce bandwidth", "Headers are too large"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What is the purpose of the Content-Type header?",
            options: ["Sets the font of the response", "Tells the server or client what format the body is in", "Sets the language of the response", "Controls caching"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "HTTPS differs from HTTP because:",
            options: ["HTTPS is a newer protocol", "HTTPS encrypts data in transit using TLS", "HTTPS is faster", "HTTPS doesn't use TCP"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Arrays & Sliding Window + Hash Maps & Sets",
    phase: 3,
    modules: [
      {
        id: "w6-m1",
        weekId: 6,
        title: "Arrays & Sliding Window",
        track: "B",
        trackName: "DSA Drill",
        realWorldContext: "Spotify's stream processing, Netflix's buffer sliding arrays, and YouTube's recommendations all use two pointers and windows to operate in O(n) time.",
        companyName: "Spotify",
        companyContext: "Spotify streams metrics to monitor user activity. Using O(n) sliding windows prevents memory allocation bottlenecks during peak hours.",
        resources: [
          { id: "r1", title: "Introduction to Sliding Window and Two Pointers — TakeUForward", type: "video", duration: "35 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=9kdHxplyl5I" },
          { id: "r2", title: "Sliding Window in 7 Minutes — AlgoMaster", type: "video", duration: "7 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=y2d0VHdvfdc" },
          { id: "r3", title: "Two Pointers in 7 Minutes — AlgoMaster", type: "video", duration: "7 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=QzZ7nmouLTI" },
          { id: "r4", title: "Fixed Sliding Window + Two Pointers in 10 Minutes [Python]", type: "video", duration: "10 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=S3aYrs0Vdek" },
          { id: "r5", title: "NeetCode — Arrays & Hashing Roadmap (practice problems)", type: "article", duration: "self-paced", source: "neetcode.io", url: "https://neetcode.io/roadmap" }
        ],
        questions: [
          {
            id: "q1",
            text: "What is the sliding window technique used for?",
            options: ["Sorting arrays", "Finding optimal subarrays or substrings by moving a window across the input", "Searching sorted arrays", "Reversing linked lists"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What is the time complexity of a sliding window solution vs brute force?",
            options: ["Both are O(n²)", "Sliding window is O(n), brute force is O(n²)", "Brute force is O(n), sliding window is O(n log n)", "Both are O(n)"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "The two-pointer technique is most useful when:",
            options: ["Sorting data", "Working with trees", "The array is sorted or you need to find pairs that satisfy a condition", "Hashing elements"],
            correctIndex: 2
          },
          {
            id: "q4",
            text: "Maximum sum subarray of size k is solved best with:",
            options: ["Recursion", "Binary search", "Fixed-size sliding window", "Stack"],
            correctIndex: 2
          },
          {
            id: "q5",
            text: "What does shrinking the window mean in a variable sliding window?",
            options: ["Removing the last element", "Moving the left pointer right to maintain a valid window condition", "Sorting the window", "Starting over from the beginning"],
            correctIndex: 1
          }
        ]
      },
      {
        id: "w6-m2",
        weekId: 6,
        title: "Hash Maps & Sets",
        track: "B",
        trackName: "DSA Drill",
        realWorldContext: "Google's autocomplete, Swiggy's cart catalog caching, and duplicate email checking use hash structures for immediate O(1) checks.",
        companyName: "Google",
        companyContext: "Google uses distributed hash tables to lookup indexing nodes quickly. O(1) access time is the standard core requirement for internet scale services.",
        resources: [
          { id: "r1", title: "Hash Tables and Hash Functions — CS Dojo", type: "video", duration: "8 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=KyUTuwz_b7Q" },
          { id: "r2", title: "HashMaps in Python Tutorial — Data Structures for Coding Interviews", type: "video", duration: "20 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=RcZsTI5h0kg" },
          { id: "r3", title: "Data Structures: Hash Tables — HackerRank", type: "video", duration: "8 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=shs0KM3wKv8" },
          { id: "r4", title: "NeetCode — Arrays & Hashing practice", type: "article", duration: "self-paced", source: "neetcode.io", url: "https://neetcode.io/roadmap" },
          { id: "r5", title: "LeetCode — Top Interview 150 (filter by Hash Table)", type: "article", duration: "self-paced", source: "leetcode.com", url: "https://leetcode.com/studyplan/top-interview-150/" }
        ],
        questions: [
          {
            id: "q1",
            text: "What is the average time complexity of a hash map lookup?",
            options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
            correctIndex: 2
          },
          {
            id: "q2",
            text: "What causes a hash collision?",
            options: ["When two keys have the same value", "When two different keys produce the same hash output", "When the map is full", "When the key is null"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "A HashSet is most useful for:",
            options: ["Storing key-value pairs", "O(1) lookups to check if an element exists and removing duplicates", "Sorted iteration", "Priority-based retrieval"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "The Two Sum problem is most efficiently solved using:",
            options: ["Two nested loops — O(n²)", "Sorting + two pointers — O(n log n)", "A hash map — O(n)", "Binary search — O(log n)"],
            correctIndex: 2
          },
          {
            id: "q5",
            text: "When would you choose a hash map over an array?",
            options: ["Always — hash maps are faster", "When you need to store values by a meaningful key rather than by index", "When the data is sorted", "When memory is limited"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Trees & BSTs + Recursion & Linked Lists",
    phase: 3,
    modules: [
      {
        id: "w7-m1",
        weekId: 7,
        title: "Trees & Binary Search Trees",
        track: "B",
        trackName: "DSA Drill",
        realWorldContext: "VS Code's folder layout, database JSON indexing, and HTML page DOM trees are binary structures. Trees appear in 70% of tech interviews.",
        companyName: "MongoDB",
        companyContext: "MongoDB index files use B-Tree nodes to search document segments. Navigating trees in O(log n) is the foundation of storage performance.",
        resources: [
          { id: "r1", title: "Binary Trees Tutorial — Introduction, Traversals, BST — NeetCode", type: "video", duration: "45 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=4s1Tcvm00pA" },
          { id: "r2", title: "CS50x 2025 — Lecture 5 — Data Structures (Harvard)", type: "video", duration: "2.5 hrs", source: "youtube.com", url: "https://www.youtube.com/watch?v=aV8LlSmd1E8" },
          { id: "r3", title: "L39. Introduction to Binary Search Tree — TakeUForward", type: "video", duration: "25 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=p7-9UvDQZ3w" },
          { id: "r4", title: "Visualgo — Interactive Tree & BST Visualizations", type: "article", duration: "interactive", source: "visualgo.net", url: "https://visualgo.net/en" }
        ],
        questions: [
          {
            id: "q1",
            text: "In a Binary Search Tree, where are values smaller than the root stored?",
            options: ["In the right subtree", "In the left subtree", "At the root", "Randomly"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What is in-order traversal of a BST?",
            options: ["Root → Left → Right", "Left → Root → Right — produces sorted output", "Left → Right → Root", "Right → Root → Left"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "What is the time complexity of search in a balanced BST?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
            correctIndex: 2
          },
          {
            id: "q4",
            text: "What makes a BST 'unbalanced' and why does it matter?",
            options: ["Having too many nodes", "When nodes are inserted in sorted order, the tree degrades to a linked list with O(n) operations", "Having duplicate keys", "Having null leaves"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "A trie data structure is most efficient for:",
            options: ["Sorting numbers", "Finding shortest paths", "Prefix-based string search like autocomplete", "Storing key-value pairs"],
            correctIndex: 2
          }
        ]
      },
      {
        id: "w7-m2",
        weekId: 7,
        title: "Linked Lists & Recursion",
        track: "B",
        trackName: "DSA Drill",
        realWorldContext: "Editor undo histories, browser forward/back queues, and music playlists are sequence chains. Reversing lists in-place is the SDE-1 test.",
        companyName: "Adobe",
        companyContext: "Adobe Photoshop stores history states using linked list chains. Dynamic allocation permits adding layers without pre-sizing arrays.",
        resources: [
          { id: "r1", title: "Stacks, Queues and LinkedList Complete Tutorial — SCALER", type: "video", duration: "2 hrs", source: "youtube.com", url: "https://www.youtube.com/watch?v=BnZLGy3g8y4" },
          { id: "r2", title: "GeeksforGeeks — Linked List Data Structure", type: "article", duration: "20 min read", source: "geeksforgeeks.org", url: "https://www.geeksforgeeks.org/data-structures/linked-list/" },
          { id: "r3", title: "Visualgo — Linked List Visualizations", type: "article", duration: "interactive", source: "visualgo.net", url: "https://visualgo.net/en" }
        ],
        questions: [
          {
            id: "q1",
            text: "What is the key difference between a linked list and an array?",
            options: ["Linked lists are faster always", "Linked lists have non-contiguous memory with O(1) insert/delete but O(n) access; arrays have O(1) access but O(n) insert/delete", "Arrays use pointers, linked lists do not", "Linked lists support indexing, arrays do not"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "Floyd's cycle detection algorithm uses:",
            options: ["A hash set to track visited nodes", "Two pointers moving at different speeds — a slow and a fast pointer", "Recursion with memoization", "A stack to reverse the list"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "To reverse a linked list in place you need:",
            options: ["A new list and copying all nodes", "Three pointers: prev, current, and next", "Recursion only", "A stack"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What is tail recursion?",
            options: ["Recursion that never terminates", "A recursive call where the recursive call is the last operation, allowing stack optimization", "Recursion that works on tails of linked lists", "A loop disguised as recursion"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "The base case in recursion is:",
            options: ["The first call to the function", "The condition that stops the recursion and returns a value without a further call", "The most complex sub-problem", "A call to an iterative version"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Graphs & BFS/DFS",
    phase: 3,
    modules: [
      {
        id: "w8-m1",
        weekId: 8,
        title: "Graphs, BFS & DFS",
        track: "B",
        trackName: "DSA Drill",
        realWorldContext: "Google Maps routes, LinkedIn's network connectivity, and Swiggy's driver dispatch models use graph structures to navigate node linkages.",
        companyName: "LinkedIn",
        companyContext: "LinkedIn uses DFS to search direct contacts and BFS to locate degree connections. Traversal determines relationship suggestions.",
        resources: [
          { id: "r1", title: "Graph Algorithms Interview Questions: BFS, DFS, Shortest Path & MST Tutorial", type: "video", duration: "50 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=KGWJrkK-QVU" },
          { id: "r2", title: "BFS and DFS Graph Traversal Algorithms Explained", type: "video", duration: "25 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=D8ZS32wGs0s" },
          { id: "r3", title: "Breadth First Search (BFS): Visualized and Explained", type: "video", duration: "12 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=xlVX7dXLS64" },
          { id: "r4", title: "Algorithms: Graph Search, DFS and BFS — HackerRank", type: "video", duration: "8 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=zaBhtODEL0w" },
          { id: "r5", title: "NeetCode — Graphs section", type: "article", duration: "self-paced", source: "neetcode.io", url: "https://neetcode.io/roadmap" }
        ],
        questions: [
          {
            id: "q1",
            text: "What data structure does BFS use internally?",
            options: ["Stack", "Queue", "Heap", "Hash map"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What data structure does DFS use internally (or implicitly via recursion)?",
            options: ["Queue", "Heap", "Stack", "Array"],
            correctIndex: 2
          },
          {
            id: "q3",
            text: "BFS is better than DFS for finding:",
            options: ["Connected components", "The shortest path in an unweighted graph", "Topological sort", "Cycle detection"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "Dijkstra's algorithm is used for:",
            options: ["Cycle detection", "Topological sort", "Shortest path in a weighted graph with non-negative edges", "Minimum spanning tree"],
            correctIndex: 2
          },
          {
            id: "q5",
            text: "A graph with no cycles is called:",
            options: ["A complete graph", "A bipartite graph", "A directed acyclic graph (DAG)", "A weighted graph"],
            correctIndex: 2
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Dynamic Programming",
    phase: 3,
    modules: [
      {
        id: "w9-m1",
        weekId: 9,
        title: "Dynamic Programming: 1D, 2D & Classic Patterns",
        track: "B",
        trackName: "DSA Drill",
        realWorldContext: "Uber ride rates, Ola dispatch paths, and price optimization systems use DP to resolve optimal paths from complex sub-choices.",
        companyName: "Ola Cabs",
        companyContext: "Ola matches dispatch pathways using dynamic grids. Memoization saves compute resources by preventing duplicate node calculation.",
        resources: [
          { id: "r1", title: "Learn Dynamic Programming with Animations – Full Course for Beginners", type: "video", duration: "2 hrs", source: "youtube.com", url: "https://www.youtube.com/watch?v=66hDgWottdA" },
          { id: "r2", title: "Dynamic Programming 1D — Full Course — NeetCode", type: "video", duration: "2 hrs", source: "youtube.com", url: "https://www.youtube.com/watch?v=_i4Yxeh5ceQ" },
          { id: "r3", title: "5 Simple Steps for Solving Dynamic Programming Problems", type: "video", duration: "15 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=aPQY__2H3tE" },
          { id: "r4", title: "Mastering Dynamic Programming — How to Solve Any Interview Problem", type: "video", duration: "20 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=Hdr64lKQ3e4" },
          { id: "r5", title: "FreeCodeCamp — Dynamic Programming (article with worked examples)", type: "article", duration: "20 min read", source: "freecodecamp.org", url: "https://www.freecodecamp.org/news/demystifying-dynamic-programming-3efafb8d4296/" }
        ],
        questions: [
          {
            id: "q1",
            text: "What is the difference between memoization and tabulation?",
            options: ["They are the same", "Memoization is top-down recursion with caching; tabulation is bottom-up iterative", "Memoization uses arrays, tabulation uses hash maps", "Tabulation is always faster"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "DP is applicable when a problem has:",
            options: ["A greedy structure only", "Optimal substructure and overlapping subproblems", "Sorting as a first step", "A graph representation"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "The Fibonacci sequence in DP has time complexity of:",
            options: ["O(n²) with memoization", "O(n) with memoization or tabulation", "O(2ⁿ) always", "O(log n) with tabulation"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "The 0/1 Knapsack problem is best solved with:",
            options: ["Greedy", "Two pointers", "2D dynamic programming", "BFS"],
            correctIndex: 2
          },
          {
            id: "q5",
            text: "LCS stands for:",
            options: ["Linked Chain Sequence", "Longest Common Subsequence", "Lowest Cost Search", "Linear Complexity Sort"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Stacks & Queues + Mixed Pattern Review",
    phase: 3,
    modules: [
      {
        id: "w10-m1",
        weekId: 10,
        title: "Stacks, Queues & Pattern Review",
        track: "B",
        trackName: "DSA Drill",
        realWorldContext: "Jira task transitions, Swiggy delivery queues, and editor undo actions use stacks and FIFO/LIFO structures to manage state.",
        companyName: "Atlassian",
        companyContext: "Atlassian uses priority queues to track task status. Restricting insertion and removal ensures task processing order rules are met.",
        resources: [
          { id: "r1", title: "Data Structures Explained: Arrays, Stacks, Graphs & More — CS Fundamentals", type: "video", duration: "30 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=SuCGoHVoIag" },
          { id: "r2", title: "Advanced Two Pointers & Sliding Window Explained", type: "video", duration: "40 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=Hh7qiLLgAAE" },
          { id: "r3", title: "Learn Two Pointers and Sliding Window — GeeksforGeeks", type: "video", duration: "1.5 hrs", source: "youtube.com", url: "https://www.youtube.com/watch?v=8zBzUAQH5y8" },
          { id: "r4", title: "NeetCode 150 — Full Practice Set", type: "article", duration: "self-paced", source: "neetcode.io", url: "https://neetcode.io/practice" },
          { id: "r5", title: "LeetCode — Patterns Cheat Sheet", type: "article", duration: "15 min read", source: "leetcode.com", url: "https://leetcode.com/discuss/general-discussion/458695/" }
        ],
        questions: [
          {
            id: "q1",
            text: "A stack follows which principle?",
            options: ["FIFO — First In First Out", "LIFO — Last In First Out", "Priority-based retrieval", "Random access"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "A queue follows which principle?",
            options: ["LIFO", "FIFO — First In First Out", "Priority-based retrieval", "Random access"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "Which data structure is best for implementing a browser's back button?",
            options: ["Queue", "Hash map", "Stack", "Linked list"],
            correctIndex: 2
          },
          {
            id: "q4",
            text: "A monotonic stack is useful for:",
            options: ["Sorting elements", "Finding the next greater or smaller element for each item in O(n)", "BFS traversal", "Dynamic programming"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "A deque (double-ended queue) supports:",
            options: ["Only front insertion and removal", "Only back insertion and removal", "Insertion and removal from both ends", "Priority-based retrieval"],
            correctIndex: 2
          }
        ]
      }
    ]
  },
  {
    id: 11,
    title: "System Design Principles + API Design",
    phase: 4,
    modules: [
      {
        id: "w11-m1",
        weekId: 11,
        title: "System Design Principles: Scalability, CAP Theorem & API Design",
        track: "A",
        trackName: "Concept",
        realWorldContext: "Systems serving millions make explicit CAP trade-offs. Design API contracts to be idempotent so networks can safely retry failed calls.",
        companyName: "Stripe",
        companyContext: "Stripe guarantees transaction safety by enforcing unique Idempotency-Keys on all POST endpoints, avoiding duplicate charges on network retries.",
        resources: [
          { id: "r1", title: "System Design Course — APIs, Databases, Caching, CDNs, Load Balancing — freeCodeCamp", type: "video", duration: "3 hrs", source: "youtube.com", url: "https://www.youtube.com/watch?v=C842vFY5kRo" },
          { id: "r2", title: "System Design Explained for Beginners — Load Balancing, Caching, Sharding & CAP Theorem", type: "video", duration: "40 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=wE8I71pjeLQ" },
          { id: "r3", title: "System Design Explained: APIs, Databases, Caching, CDNs, Load Balancing", type: "video", duration: "1.5 hrs", source: "youtube.com", url: "https://www.youtube.com/watch?v=adOkTjIIDnk" },
          { id: "r4", title: "System Design Primer — GitHub (334k stars)", type: "article", duration: "self-paced", source: "github.com", url: "https://github.com/donnemartin/system-design-primer" },
          { id: "r5", title: "High Scalability — Real-world architecture case studies", type: "article", duration: "ongoing", source: "highscalability.com", url: "http://highscalability.com/" }
        ],
        questions: [
          {
            id: "q1",
            text: "CAP theorem states that a distributed system can guarantee only two of:",
            options: ["Speed, Security, Scalability", "Consistency, Availability, Partition Tolerance", "Cost, Architecture, Performance", "Compute, Access, Persistence"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "Horizontal scaling means:",
            options: ["Making one server more powerful", "Adding more servers to distribute the load", "Increasing database storage", "Compressing responses"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "Idempotency in API design means:",
            options: ["The API is fast", "Making the same request multiple times produces the same result", "The API requires authentication", "Requests are encrypted"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "REST API versioning is important because:",
            options: ["It makes APIs faster", "It allows old clients to keep working when the API changes", "It reduces server load", "It encrypts responses"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "What is the difference between latency and throughput?",
            options: ["They are the same thing", "Latency is time per request; throughput is requests handled per unit time", "Latency is server-side; throughput is client-side", "Throughput measures memory, latency measures CPU"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Database Design + Caching Strategies",
    phase: 4,
    modules: [
      {
        id: "w12-m1",
        weekId: 12,
        title: "Database Design at Scale + Caching Strategies",
        track: "A",
        trackName: "Concept",
        realWorldContext: "Swiggy serves millions of restaurant cards using Redis cache. Without cache-aside design, every single page reload would hit the db, crashing it.",
        companyName: "Swiggy",
        companyContext: "Swiggy caches vendor listings on Redis. Cache-aside operations serve 99% of requests instantly, preventing connection pool exhaustion on Postgres.",
        resources: [
          { id: "r1", title: "System Design Full Course — Sharding, Caching, CAP Theorem — SCALER", type: "video", duration: "2 hrs", source: "youtube.com", url: "https://www.youtube.com/watch?v=nDswg13hZ9o" },
          { id: "r2", title: "Caching Strategies Explained: System Design Fundamentals for Beginners", type: "video", duration: "25 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=TaYx0ReJWxE" },
          { id: "r3", title: "Caching Complete Tutorial — SCALER (Google SWE III)", type: "video", duration: "1 hr", source: "youtube.com", url: "https://www.youtube.com/watch?v=1XJG34mewts" },
          { id: "r4", title: "Database Sharding and Partitioning — Arpit Bhayani", type: "video", duration: "30 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=wXvljefXyEo" },
          { id: "r5", title: "Redis Documentation — Caching Use Cases", type: "article", duration: "15 min read", source: "redis.io", url: "https://redis.io/docs/latest/develop/use/patterns/" },
          { id: "r6", title: "AWS — Database Caching Strategies", type: "article", duration: "10 min read", source: "aws.amazon.com", url: "https://aws.amazon.com/caching/database-caching/" }
        ],
        questions: [
          {
            id: "q1",
            text: "Cache-aside strategy means:",
            options: ["The cache is always written before the DB", "The application checks cache first; on miss, reads from DB and writes to cache", "The DB writes to cache automatically", "Cache is written asynchronously after DB writes"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "LRU eviction policy means:",
            options: ["Least Recently Used items are evicted first", "Largest items are evicted first", "Random items are evicted", "Least Frequently Used items are evicted first"],
            correctIndex: 0
          },
          {
            id: "q3",
            text: "What is Redis most commonly used for?",
            options: ["Primary application database", "In-memory caching, session storage, and pub/sub", "File storage", "Message queuing only"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "Master-slave database replication means:",
            options: ["Two identical databases writing at the same time", "All writes go to the master; reads can be distributed across slaves/replicas", "Data is sharded across masters", "Slaves handle writes, masters handle reads"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "What problem does database indexing solve?",
            options: ["Reducing storage size", "Speeding up read queries by allowing the DB to find rows without scanning the full table", "Ensuring data integrity", "Preventing duplicate rows"],
            correctIndex: 1
          }
        ]
      },
      {
        id: "w12-m2",
        weekId: 12,
        title: "Project 3: Task Manager with Real Database",
        track: "C",
        trackName: "Build",
        realWorldContext: "Deploying a full-stack product with Postgres. Proves you understand schemas, relational constraints, security policies, and live routing.",
        companyName: "Supabase",
        companyContext: "Supabase exposes PG database features securely. Using Row Level Security, they authorize requests client-side without spinning up node proxy routes.",
        resources: [
          { id: "r1", title: "Supabase — Build a User Management App (React Quickstart)", type: "article", duration: "30 min", source: "supabase.com", url: "https://supabase.com/docs/guides/getting-started/tutorials/with-react" },
          { id: "r2", title: "Supabase Auth — Email Login Setup", type: "article", duration: "15 min", source: "supabase.com", url: "https://supabase.com/docs/guides/auth" },
          { id: "r3", title: "Vercel — Deploy Your First Project", type: "article", duration: "10 min", source: "vercel.com", url: "https://vercel.com/docs/getting-started-with-vercel" }
        ],
        questions: [
          {
            id: "q1",
            text: "What is Supabase?",
            options: ["A frontend CSS framework", "An open-source Firebase alternative providing PostgreSQL, Auth, and APIs", "A cloud hosting service", "A React state management library"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "Designing the database schema before writing code means:",
            options: ["Writing SQL queries first", "Drawing the tables, columns, and relationships on paper before opening your IDE", "Generating the schema with AI", "Using a no-code tool"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "A REST API for a task manager needs at minimum which HTTP methods?",
            options: ["GET only", "GET and POST", "GET, POST, PUT, DELETE", "DELETE and PATCH only"],
            correctIndex: 2
          },
          {
            id: "q4",
            text: "What does JWT under the hood mean in Supabase Auth?",
            options: ["Supabase uses cookies", "Supabase Auth issues signed JSON Web Tokens to identify authenticated users", "Sessions are stored in the database", "Auth is handled by OAuth only"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "Railway is used in this project for:",
            options: ["Database hosting", "Free backend API deployment as an alternative to Vercel functions", "Frontend hosting", "DNS management"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Load Balancing & Networking + Security",
    phase: 4,
    modules: [
      {
        id: "w13-m1",
        weekId: 13,
        title: "Load Balancing, Networking & Security",
        track: "A",
        trackName: "Concept",
        realWorldContext: "Meesho routes millions of daily calls across nodes using load balancers. Understanding Layer 4/7 routing is crucial to avoid service downtime.",
        companyName: "Meesho",
        companyContext: "Meesho handles millions of checkouts by implementing consistent hashing on round-robin load balancers, routing queries to optimized nodes.",
        resources: [
          { id: "r1", title: "The Ultimate Guide to Load Balancers (System Design)", type: "video", duration: "20 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=xg7Dj2AXLyk" },
          { id: "r2", title: "Load Balancing — The Right Way To Do It — Ex-Google", type: "video", duration: "30 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=PERKHUJYotM" },
          { id: "r3", title: "System Design — Caching, Messages, Latency, Load Balancer", type: "video", duration: "35 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=VyhtabT3LB8" },
          { id: "r4", title: "Authentication Explained: OAuth2, JWT & SSO", type: "video", duration: "35 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=9JPnN1Z_iSY" },
          { id: "r5", title: "OWASP Top 10 — Web Application Security Risks", type: "article", duration: "20 min read", source: "owasp.org", url: "https://owasp.org/www-project-top-ten/" },
          { id: "r6", title: "Cloudflare Learning — What is a Load Balancer?", type: "article", duration: "8 min read", source: "cloudflare.com", url: "https://www.cloudflare.com/learning/performance/what-is-load-balancing/" }
        ],
        questions: [
          {
            id: "q1",
            text: "What is consistent hashing and why is it used in load balancing?",
            options: ["A hashing algorithm for passwords", "A technique that minimizes data redistribution when servers are added or removed", "An encryption standard", "A database indexing method"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "Layer 4 load balancing operates at:",
            options: ["The application layer, routing by URL", "The transport layer, routing by IP and TCP port", "The DNS layer", "The database layer"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "WebSockets differ from HTTP in that:",
            options: ["They use UDP", "They maintain a persistent bidirectional TCP connection", "They are read-only", "They do not support headers"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What is a DDoS attack and how do you mitigate it?",
            options: ["Direct Database Operations; shut down the DB", "Distributed Denial of Service; use rate limiting, CDNs, and traffic filtering", "Data Deletion on Server; use backups", "DNS Domain Override; use SSL"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "What is CORS and why does the browser enforce it?",
            options: ["Cross-Origin Resource Sharing; prevents unauthorized requests from other domains to protect user data", "Cloud Object Routing System; speeds up assets", "Code Optimization and Run Speed; improves JS speed", "Cache-Control Overrides; manages browser caching"],
            correctIndex: 0
          }
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Generative AI APIs & Prompt Engineering",
    phase: 5,
    modules: [
      {
        id: "w14-m1",
        weekId: 14,
        title: "LLMs, System Prompts & Chain-of-Thought",
        track: "D",
        trackName: "AI Direction",
        realWorldContext: "Every modern AI product is built on top of LLMs. Understanding how to use OpenAI/Anthropic SDKs and design resilient prompts is the core skill of an AI Product Engineer.",
        companyName: "Anthropic",
        companyContext: "Anthropic leverages system prompts and structured formatting to guide Claude models in coding and reasoning tasks, maximizing success rates in automation.",
        resources: [
          { id: "r1", title: "LangChain / OpenAI API Crash Course", type: "video", duration: "40 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=5-P9Psn9P4Q" },
          { id: "r2", title: "Anthropic Prompt Engineering Guide", type: "article", duration: "15 min read", source: "docs.anthropic.com", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
          { id: "r3", title: "OpenAI Guide: Prompt Engineering", type: "article", duration: "20 min read", source: "platform.openai.com", url: "https://platform.openai.com/docs/guides/prompt-engineering" }
        ],
        questions: [
          {
            id: "q1",
            text: "What is a System Prompt in LLM APIs?",
            options: ["Controls system settings", "Sets the persona and structural boundaries for the model's behavior", "Upgrades the AI model", "Deletes cache"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What is Temperature in LLM sampling?",
            options: ["GPU heat", "Controls randomness: lower temperature is more deterministic, higher is more creative", "Speed of generation", "Token length limit"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "Chain-of-thought prompting is used to:",
            options: ["Speed up response times", "Help the LLM solve complex logic by forcing it to output its reasoning step-by-step", "Chain multiple API calls", "Format output as markdown"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What are tokens in LLMs?",
            options: ["Cryptocurrencies", "Sub-word units of text processed by the model", "API keys", "UI elements"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "What is the context window of an LLM?",
            options: ["The physical UI dimensions", "The total limit of input and output tokens the model can process in a single request", "The API timeout threshold", "The model training dataset size"],
            correctIndex: 1
          }
        ]
      },
      {
        id: "w14-m2",
        weekId: 14,
        title: "Project 4: AI Prompt Playground",
        track: "C",
        trackName: "Build",
        realWorldContext: "Create an interactive playground that lets users test prompts with variables, temperatures, and model simulated outputs, and save prompt templates.",
        companyName: "OpenAI",
        companyContext: "OpenAI provides the Playgrounds tool for developers. Building your own playground teaches you prompt parsing and variable tokenization.",
        resources: [
          { id: "r1", title: "Vercel AI SDK Guide", type: "article", duration: "15 min read", source: "sdk.vercel.ai", url: "https://sdk.vercel.ai/docs/introduction" },
          { id: "r2", title: "Next.js Route Handlers", type: "article", duration: "10 min read", source: "nextjs.org", url: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers" }
        ],
        questions: [
          {
            id: "q1",
            text: "Why should you stream LLM responses in user interfaces?",
            options: ["Streaming uses less bandwidth", "Streaming improves perceived performance and reduces wait time for the user", "Streaming is cheaper", "Streaming is more secure"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What does Vercel AI SDK do?",
            options: ["Hosts LLM weights", "Provides clean hooks for streaming text and building chatbots in React", "Translates code into Python", "Automates Vercel deployments"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "How do you secure an LLM API key in a Next.js app?",
            options: ["Save it in localStorage", "Use Next.js Route Handlers (API routes) on the server side and load via env variables", "Expose it in client-side code", "Commit it to Github"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What is a few-shot prompt?",
            options: ["A very short prompt", "Providing the model with a few examples of desired input-output behavior", "Calling the API 3 times", "Limiting the response to 10 tokens"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "What does the useChat hook in Vercel AI SDK manage automatically?",
            options: ["Server hosting", "Chat history state, loading states, and bidirectional streaming updates", "Database replication", "User login auth"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Vector Databases & RAG",
    phase: 5,
    modules: [
      {
        id: "w15-m1",
        weekId: 15,
        title: "RAG: Chunking, Embeddings & Vector Search",
        track: "A",
        trackName: "Concept",
        realWorldContext: "LLMs do not know your private business data. RAG injects matching text blocks into the prompt window. Semantic search via vectors is the standard.",
        companyName: "Perplexity",
        companyContext: "Perplexity performs real-time semantic RAG by executing query vector searches across dynamic internet web indexes, ranking text matches in under 200ms.",
        resources: [
          { id: "r1", title: "Vector Databases & RAG Explained", type: "video", duration: "30 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=F3GzQyC7Z2c" },
          { id: "r2", title: "What is RAG? — Pinecone", type: "article", duration: "15 min read", source: "pinecone.io", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" },
          { id: "r3", title: "What are Embeddings? — OpenAI", type: "article", duration: "10 min read", source: "platform.openai.com", url: "https://platform.openai.com/docs/guides/embeddings" }
        ],
        questions: [
          {
            id: "q1",
            text: "What does RAG stand for?",
            options: ["Random Access Generation", "Retrieval-Augmented Generation", "Real-time Agentic Grouping", "Relational API Gateway"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What is an embedding vector?",
            options: ["An encrypted password", "A list of numbers representing the semantic meaning of a text segment in a high-dimensional space", "A database pointer", "An HTML component"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "Why is text chunking necessary before embedding?",
            options: ["Embeddings have size limits, and small chunks ensure search queries return highly specific relevant contexts", "To make embeddings cheaper", "To speed up database indexing", "To encrypt the text"],
            correctIndex: 0
          },
          {
            id: "q4",
            text: "What search metric is commonly used to find similar vectors?",
            options: ["String edit distance", "Cosine similarity", "SHA-256", "Bubble sort index"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "What is a Vector Database?",
            options: ["A database that only stores images", "A specialized database designed to store, index, and query vector embeddings efficiently", "A NoSQL database for lists", "A graph database"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Agentic Workflows & Multi-Agent Systems",
    phase: 5,
    modules: [
      {
        id: "w16-m1",
        weekId: 16,
        title: "AI Agents: Loops, Function Calling & State Machines",
        track: "D",
        trackName: "AI Direction",
        realWorldContext: "Chatbots answer questions; agents act. Agents run loops of observation, planning, and execution using external APIs (tools). Learn the loop patterns.",
        companyName: "LangChain",
        companyContext: "LangChain builds LangGraph to allow stateful multi-agent systems. Product agents use graph loops to write code and correct execution failures autonomously.",
        resources: [
          { id: "r1", title: "AI Agents & Function Calling Crash Course", type: "video", duration: "45 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=0kO7S5Lp9p0" },
          { id: "r2", title: "LangGraph Guide: Introduction", type: "article", duration: "20 min read", source: "langchain-ai.github.io", url: "https://langchain-ai.github.io/langgraph/" },
          { id: "r3", title: "OpenAI Function Calling Guide", type: "article", duration: "15 min read", source: "platform.openai.com", url: "https://platform.openai.com/docs/guides/function-calling" }
        ],
        questions: [
          {
            id: "q1",
            text: "What makes an AI program an 'agent' rather than a standard LLM chat?",
            options: ["It uses more memory", "It can reason, plan, and call tools autonomously inside an execution loop", "It uses a larger model", "It runs on a mobile app"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What is Function Calling (Tool Use) in LLMs?",
            options: ["Exposing server functions to the frontend", "The model outputting a structured JSON request to run a specific function with arguments", "Calling the LLM API recursively", "Compiling Python code"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "In LangGraph, agent states are represented as:",
            options: ["Global variables", "A state graph where nodes are agent actions and edges are decisions", "Redux state trees", "LocalStorage values"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What is the ReAct agent loop framework?",
            options: ["A React frontend library", "A loop of Reasoning (thought) and Acting (calling tools/observing results)", "Reactive state management", "Recursive action trees"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "How do you prevent an agent from running into an infinite execution loop?",
            options: ["Add a maximum step count safety threshold", "Upgrade the model", "Use a smaller temperature", "Delete history"],
            correctIndex: 0
          }
        ]
      },
      {
        id: "w16-m2",
        weekId: 16,
        title: "Project 5: RAG Semantic Search Engine",
        track: "C",
        trackName: "Build",
        realWorldContext: "Create a semantic search engine using memory vectors. The app lets users upload text files, index them, and ask natural language questions with source attribution.",
        companyName: "Pinecone",
        companyContext: "Pinecone hosts developer indices for serverless vector queries, supporting real-time cosine matches across millions of document structures.",
        resources: [
          { id: "r1", title: "Pinecone Quickstart Guide", type: "article", duration: "15 min read", source: "pinecone.io", url: "https://docs.pinecone.io/guides/getting-started/quickstart" },
          { id: "r2", title: "pgvector Guide — Supabase", type: "article", duration: "20 min read", source: "supabase.com", url: "https://supabase.com/docs/guides/database/extensions/pgvector" }
        ],
        questions: [
          {
            id: "q1",
            text: "What is a vector index in Pinecone?",
            options: ["A SQL schema", "An index designed to fetch near-neighbors of vectors in high-dimensional space", "A document store folder", "A primary key"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What does cosine similarity of 1.0 indicate between two embeddings?",
            options: ["Vectors are orthogonal", "Vectors have identical semantic orientation and meaning", "Vectors are opposites", "The search failed"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "Why is pgvector preferred in some Postgres architectures?",
            options: ["It removes the database", "It allows developers to keep data and vector indexes in a single relational system", "It is faster than GPU clusters", "It is free on all local hosts"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What is metadata filtering in vector databases?",
            options: ["Hiding files", "Restricting search results to items matching specific non-vector criteria like category or userId", "Re-ranking search outputs", "Formatting strings"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "In RAG context injection, what should you do if the search returns no results?",
            options: ["Crash the application", "Fall back to the general LLM knowledge or inform the user that no matching documents were found", "Send a blank prompt", "Force a random match"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 17,
    title: "Production CI/CD, Monitoring & Testing",
    phase: 6,
    modules: [
      {
        id: "w17-m1",
        weekId: 17,
        title: "CI/CD Pipelines, Playwright Testing & Observability",
        track: "A",
        trackName: "Concept",
        realWorldContext: "Shipping with confidence means automation. Airbnb, Sentry, Stripe run thousands of tests on every PR. Playwright tests UI, CI/CD deploys automatically.",
        companyName: "Sentry",
        companyContext: "Sentry tracks exceptions in real time. Running telemetry in production ensures you receive stack traces the moment a new release triggers a bug.",
        resources: [
          { id: "r1", title: "CI/CD Pipelines Explained", type: "video", duration: "30 min", source: "youtube.com", url: "https://www.youtube.com/watch?v=scEDHsr3APg" },
          { id: "r2", title: "Playwright E2E Testing Docs", type: "article", duration: "20 min read", source: "playwright.dev", url: "https://playwright.dev/docs/intro" },
          { id: "r3", title: "Sentry / Datadog Observability Guide", type: "article", duration: "15 min read", source: "dev.to", url: "https://dev.to/sentry/observability-101-for-developers-5cf2" }
        ],
        questions: [
          {
            id: "q1",
            text: "What does CI/CD stand for?",
            options: ["Code Integration / Code Delivery", "Continuous Integration / Continuous Deployment", "Centralized Indexing / Cloud Database", "Client Interaction / Client Delivery"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "What is the purpose of an E2E (End-to-End) test using Playwright?",
            options: ["Test specific functions", "Simulate a real user interacting with the browser to test the full flow", "Test API rates", "Lint codebase"],
            correctIndex: 1
          },
          {
            id: "q3",
            text: "What does GitHub Actions do?",
            options: ["Hosts repositories", "Runs automated workflows (tests, builds, deploys) triggered by git events", "Translates markdown", "Manages pull requests"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What is the difference between monitoring and observability?",
            options: ["They are identical", "Monitoring tells you when something is broken; observability helps you understand why", "Monitoring is server-side; observability is client-side", "Observability is for databases"],
            correctIndex: 1
          },
          {
            id: "q5",
            text: "A green deployment pipeline verifies:",
            options: ["That the code is fast", "That all tests pass, lint checks succeed, and the app builds successfully", "That the app has users", "That the database is normalized"],
            correctIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: 18,
    title: "Capstone Project Launch",
    phase: 6,
    modules: [
      {
        id: "w18-m1",
        weekId: 18,
        title: "Project 6: Capstone — AI Career Copilot",
        track: "C",
        trackName: "Build",
        realWorldContext: "Your graduation project. Incorporates full stack structure, real localStorage tracking, a mockup vector search, prompt playground elements, and an AI chat interface.",
        companyName: "Netflix",
        companyContext: "Netflix demands excellent execution for production deployments. Shipping a polished project proves you can engineer clean architectures.",
        resources: [
          { id: "r1", title: "Portfolio Preparation Guide", type: "article", duration: "20 min read", source: "swemastery.com", url: "https://github.com/donnemartin/system-design-primer" },
          { id: "r2", title: "Vercel Production Checklist", type: "article", duration: "15 min", source: "vercel.com", url: "https://vercel.com/docs/deployments/production-checklist" }
        ],
        questions: [
          {
            id: "q1",
            text: "What makes a capstone project stand out to hiring managers?",
            options: ["Large volume of code", "Solving a real problem with clean architecture, proper documentation, and a live working demo", "Using 20+ libraries", "A colorful interface"],
            correctIndex: 1
          },
          {
            id: "q2",
            text: "In a production deployment checklist, you should verify:",
            options: ["Fast load speed, secure environment variables, and automated error tracking", "That you have a custom logo", "That the project is private", "That you use next/font in every file"],
            correctIndex: 0
          },
          {
            id: "q3",
            text: "How do you demonstrate code quality on GitHub?",
            options: ["Push all files in one commit", "Write atomic, descriptive commits, structure folders cleanly, and provide a detailed README", "Create 100 branches", "Star your own repo"],
            correctIndex: 1
          },
          {
            id: "q4",
            text: "What is the final step of the SWE-MASTERCLASS?",
            options: ["Passing all quizzes and deploying your Capstone project live", "Reading all articles", "Saving notes in localStorage", "Resets progress"],
            correctIndex: 0
          },
          {
            id: "q5",
            text: "What does an AI-powered Career Copilot do in Project 6?",
            options: ["Writes code for you", "Analyzes your learning metrics, resume, and matches your portfolio projects to potential job listings", "Applies to jobs", "Resets progress"],
            correctIndex: 1
          }
        ]
      }
    ]
  }
];

export const getModuleById = (id: string) => {
  for (const week of WEEKS) {
    const mod = week.modules.find((m) => m.id === id);
    if (mod) return mod;
  }
  return null;
};

export const getWeekByModuleId = (moduleId: string) => {
  return WEEKS.find((w) => w.modules.some((m) => m.id === moduleId)) || null;
};
