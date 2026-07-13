# Deployment Guide (SWE Masterclass)

This monorepo contains:
- `/frontend`: Next.js Web App
- `/backend`: Express TypeScript API
- **Database**: PostgreSQL hosted on [Neon](https://neon.tech)

---

## 1. Database Setup (Neon)

A Neon Postgres database project named `swe-masterclass` has been successfully provisioned.

### Database Credentials:
- **Project ID**: `gentle-wave-65044228`
- **Database Name**: `neondb`
- **Connection String**:
  ```text
  postgresql://neondb_owner:<PASSWORD>@ep-super-term-ahtkb7t0-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require
  ```
- *Note: The real connection string (with password) has been populated in your local `backend/.env` file. This file is ignored by Git to keep your credentials secure.*

---

## 2. Deploying Frontend to Vercel

Since Vercel natively supports Next.js, deploying the frontend is straightforward.

### Step-by-Step Instructions:
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log in to your [Vercel Dashboard](https://vercel.com).
3. Click **Add New** > **Project** and import your repository.
4. In the project configuration step, configure the following:
   - **Framework Preset**: `Next.js` (automatically detected).
   - **Root Directory**: Click "Edit" and choose the `frontend` folder.
5. Click **Deploy**. Vercel will automatically build the Next.js application within the monorepo context.

---

## 3. Deploying Backend to Railway (Recommended)

Since the backend is a persistent Express server, hosting it on Railway is the recommended approach to avoid serverless cold starts and execution timeouts.

### Step-by-Step Instructions:
1. Log in to your [Railway Dashboard](https://railway.app).
2. Click **New Project** > **Deploy from GitHub repo** and select this repository.
3. Once the service is added, go to its **Settings** tab.
4. Configure the build and start scripts in Railway settings:
   - **Root Directory**: Set this to `/` (keep it at the root of the monorepo so Railway can read the shared workspace structure).
   - **Build Command**: `npm run build:backend`
   - **Start Command**: `npm run start:backend`
5. Go to the **Variables** tab in Railway and add the following environment variables:
   - `PORT`: (e.g., `5000` or let Railway assign it dynamically).
   - `DATABASE_URL`: Add your Neon connection string: `DATABASE_URL=your_postgresql_connection_string_here`.
6. Under the **Settings** tab, generate a public domain/URL for your API.

---

## 4. Deploying Backend to Vercel (Alternative - Serverless)

If you prefer to keep all services on Vercel, the Express backend can run as Vercel Serverless Functions via the `backend/vercel.json` file.

### Step-by-Step Instructions:
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New** > **Project** and import this repository.
3. Configure the project:
   - **Framework Preset**: Select `Other` (or Node.js).
   - **Root Directory**: Click "Edit" and choose the `backend` folder.
4. Go to **Settings** > **Environment Variables** and add:
   - `DATABASE_URL`: `DATABASE_URL=your_postgresql_connection_string_here`
5. Click **Deploy**. Vercel will build the API and route all requests to `src/index.ts` automatically using the `@vercel/node` builder.

---

## 5. Environment Variables & CORS (Connection)

If you implement frontend-to-backend API communication in the future:
1. **API URL**: In the Vercel Dashboard for your **frontend** project, add the variable:
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: `<YOUR_BACKEND_URL>` (e.g., `https://backend-production.up.railway.app` or `https://your-backend.vercel.app`)
2. **CORS Configuration**: The backend already includes CORS middleware. Configure origins as needed in `backend/src/index.ts`.
