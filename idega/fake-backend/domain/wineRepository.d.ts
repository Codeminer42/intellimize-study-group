import { Wine } from './Wines';

type WineRepository = {
  getNextId: () => number;
  getAll: () => Promise<Wine.Type[]>;
  save: (wine: Wine.Type) => Promise<Wine.Type>;
  getById: (id: number) => Promise<Wine.Type | undefined>;
};

export { WineRepository };
