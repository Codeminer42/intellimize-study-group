import type { NextApiRequest, NextApiResponse } from 'next';
import { getWineById } from '../../../../fake-backend/container';
import { Wine } from '../../../../fake-backend/domain/Wines';

type ApiResponse = { data: Wine.Type[] } | { error: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  const { id } = req.query;

  try {
    const wine = await getWineById(Number(id));
    if (wine) {
      return res.status(200).json({ data: [wine] });
    }

    return res.status(200).json({ data: [] });
  } catch (e: any) {
    return res.status(400).json({ error: `${e.message}` });
  }
}
