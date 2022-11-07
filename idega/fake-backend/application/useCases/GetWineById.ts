import { WineRepository } from '../../domain/wineRepository';

type Dependencies = {
  wineRepository: WineRepository;
};

const makeGetWineById =
  ({ wineRepository }: Dependencies) =>
  async (id: number) => {
    return wineRepository.getById(id);
  };

export { makeGetWineById };
