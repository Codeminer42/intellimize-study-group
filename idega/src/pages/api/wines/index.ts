import type { NextApiRequest, NextApiResponse } from 'next';
import { get, add, Wine } from '../../../../fake-backend/lowdbConfig';

type ApiResponse = {
  data: Wine[] | [];
  success: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method === 'POST') {
    try {
      const newWine = req.body;
      await add(newWine);

      res.status(200).json({ data: newWine, success: true });
    } catch (e) {
      console.log(e);
      res.status(500).json({ data: [], success: false });
    }
  }

  if (req.method === 'GET') {
    const response = await get();
    if (response) {
      res.status(200).json({ data: response, success: true });
    }

    res.status(500).json({ data: [], success: false });
  }
}
