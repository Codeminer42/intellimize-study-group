import { Wine } from '../../domain/Wines';
import { WineRepository } from '../../domain/wineRepository';

type Dependencies = {
  wineRepository: WineRepository;
};

const makeCreateWine =
  ({ wineRepository }: Dependencies) =>
  async (wine: Omit<Wine.Type, 'id'>) => {
    return wineRepository.create(wine);
  };

export { makeCreateWine };
