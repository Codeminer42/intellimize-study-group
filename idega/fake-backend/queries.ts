import fs from 'fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import inMemoryDb from './__tests__/helpers/inMemoryDb';

const _dirname = dirname(fileURLToPath(import.meta.url));
const file = join(_dirname, 'db.json');

let data = process.env.NODE_ENV !== 'test' ? JSON.parse(fs.readFileSync(file, { encoding: 'utf8' })) : inMemoryDb;

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

const get = async (): Promise<Wine[]> => {
  return data.wines;
};

const getById = async (id: number): Promise<Wine | undefined> => {
  const wine = data.wines.find((wine: Wine) => wine.id === id);

  return wine;
};

const add = async (wine: Omit<Wine, 'id'>): Promise<Wine> => {
  if (!wine) throw new Error('You need to submit a valid wine');

  return createWine(wine);
};

const createWine = (wine: Omit<Wine, 'id'>): Wine => {
  const id = data.wines.length ? Math.max(...data.wines.map((x: Wine) => x.id)) + 1 : 1;

  const createdWine = Object.assign({ id }, wine);

  data.wines.push(createdWine);
  _commit();

  return createdWine;
};

const _commit = () => {
  process.env.NODE_ENV !== 'test' ?? fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

export { get, getById, add };

