import { Wine } from '../../domain/Wines';
import { WineRepository } from '../../domain/wineRepository';

type Dependencies = {
  wineRepository: WineRepository;
};

const makeCreateWine =
  ({ wineRepository }: Dependencies) =>
    async (wine: Omit<Wine.Type, 'id'>): Promise<Wine.Type> => {
      const id = wineRepository.getNextId();
      const newWine = Wine.create({ id, ...wine });

      await wineRepository.save(newWine);

      return newWine;
    };

export { makeCreateWine };
