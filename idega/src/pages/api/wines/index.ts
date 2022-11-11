import type { NextApiRequest, NextApiResponse } from 'next';
import { Wine } from '../../../../fake-backend/domain/Wines';
import { createWine, getWines } from '../../../../fake-backend/container';

type ApiResponse = { data: Wine.Type[] | {} } | { error: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method === 'POST') {
    try {
      const newWine = await createWine(req.body);

      res.status(201).json({ data: newWine });
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: `${e}` });
    }
  }

  if (req.method === 'GET') {
    try {
      const wines = await getWines();
      if (wines) {
        res.status(200).json({ data: wines });
      }
    } catch (e) {
      res.status(500).json({ error: `${e}` });
    }
  }
}
