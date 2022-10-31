import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Low, JSONFile } from 'lowdb';

export type Wine = {
  id: number;
  name: string;
  year: number;
  wineryOfOrigin: string;
  mainImage: string;
  sellingPrice: number;
  quantity: number;
  moreDetails: {
    description: string;
    tags: string[];
    alcohol_content: number;
    buying_price: number;
    location_in_cellar: {
      section: string;
      position: string;
    };
    color: string;
  };
};

type Data = {
  wines: Wine[];
};

const _dirname = dirname(fileURLToPath(import.meta.url));
const file = join(_dirname, 'db.json');

const adapter = new JSONFile<Data>(file);
const db = new Low(adapter);

const get = async (): Promise<Wine[]> => {
  await db.read();
  db.data ||= { wines: [] };

  return db.data.wines;
};

const getById = async (id: number): Promise<Wine | undefined> => {
  await db.read();
  db.data ||= { wines: [] };
  const response = db.data.wines.find((elm) => elm.id === id);

  if (response) {
    return response;
  }

  return {} as Wine;
};

const add = async (body: Wine) => {
  let response = {
    data: {},
    success: null,
  };

  if (!body) {
    return { ...response, success: false };
  }

  try {
    await db.read();
    db.data ||= { wines: [] };

    db.data.wines.push(body);
    db.write();

    return { data: body, success: true };
  } catch (e) {
    console.error(e);
    return { ...response, success: false };
  }
};

export { get, getById, add };
