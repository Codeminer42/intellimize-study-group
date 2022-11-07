import fs from 'fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { Wine } from '../domain/Wines';
import { WineRepository } from '../domain/wineRepository';

import inMemoryDb from '../data/inMemoryDb';

const _dirname = dirname(fileURLToPath(import.meta.url));
const file = join(_dirname, 'db.json');

let data = process.env.NODE_ENV !== 'test' ? JSON.parse(fs.readFileSync(file, { encoding: 'utf8' })) : inMemoryDb();

const getNextId = () => (data.wines.length ? Math.max(...data.wines.map((x: Wine.Type) => x.id)) + 1 : 1);

export const wineRepository: WineRepository = {
  create: async function (wine: Omit<Wine.Type, 'id'>): Promise<Wine.Type> {
    const newWine = Object.assign({ id: getNextId() }, wine);

    data.wines.push(newWine);
    _commit();

    return newWine;
  },

  getAll: async function (): Promise<Wine.Type[]> {
    return data.wines;
  },

  getById: async function (id: number): Promise<Wine.Type | undefined> {
    if (isNaN(id)) throw new Error('Invalid wine id');

    const wine = data.wines.find((wine: Wine.Type) => wine.id === id);

    return wine;
  },
};

const _commit = () => {
  if (process.env.NODE_ENV !== 'test') fs.writeFileSync(file, JSON.stringify(data, null, 2));

  return;
};
