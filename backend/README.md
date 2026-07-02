# SWE-MASTERCLASS Backend Service Scaffold

This directory contains the Express & TypeScript backend scaffolding for the learning platform.

## Structure
- `/src/index.ts`: Application entry point.
- `/src/routes/`: Route mappings.
- `/src/controllers/`: Endpoint handlers.
- `/src/models/`: Database schemas (Prisma, SQLite, pgvector, etc.).

## Getting Started

1. Navigate to the directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server (auto-reloading):
   ```bash
   npm run dev
   ```

4. Check the server health at `http://localhost:5000/api/health`.
