import type { NextApiRequest, NextApiResponse } from 'next';
import { getById, Wine } from '../../../../fake-backend/queries';

type ApiResponse = {
  data: Wine[] | {};
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  const { id } = req.query;

  try {
    const response = await getById(Number(id));
    if (response) {
      return res.status(200).json({ data: [response] });
    }

    return res.status(400).json({ data: [], error: 'Can\'t find a wine with this id' });
  } catch {
    return res.status(500).json({ data: [] });
  }
}
