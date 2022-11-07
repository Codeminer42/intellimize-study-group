import { Wine } from './Wines';

type WineRepository = {
  getAll: () => Promise<Wine.Type[]>;
  create: (wine: Omit<Wine.Type, 'id'>) => Promise<Wine.Type>;
  getById: (id: number) => Promise<Wine.Type | undefined>;
};

export { WineRepository };
