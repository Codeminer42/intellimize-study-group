import type { NextApiRequest, NextApiResponse } from 'next';
import { getById, Wine } from '../../../../fake-backend/lowdbConfig';

type ApiResponse = {
  data: Wine[] | [];
  success: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  const { id } = req.query;

  const response = await getById(Number(id));
  if (response) {
    res.status(200).json({ data: [response], success: true });
  }

  res.status(500).json({ data: [], success: true });
}
