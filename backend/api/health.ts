import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCorsHeaders } from './_lib/cors';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (setCorsHeaders(req, res)) return;

  if (req.method === 'GET') {
    res.status(200).json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: "swe-masterclass-backend"
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
