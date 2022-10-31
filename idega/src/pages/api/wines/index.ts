import type { NextApiRequest, NextApiResponse } from 'next';
import { get, add, Wine } from '../../../../fake-backend/queries';

type ApiResponse = {
  data: Wine[] | {};
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method === 'POST') {
    try {
      const response = await add(req.body);

      res.status(201).json({ data: response });
    } catch (e) {
      console.log(e);
      res.status(500).json({ data: {} });
    }
  }

  if (req.method === 'GET') {
    try {
      const response = await get();
      if (response) {
        res.status(200).json({ data: response });
      }
    } catch {
      res.status(500).json({ data: {} });
    }

  }
}
