import { makeCreateWine } from './application/useCases/CreateWine';
import { makeGetWineById } from './application/useCases/GetWineById';
import { wineRepository } from './infra/WineRepository';

const getWines = wineRepository.getAll;
const createWine = makeCreateWine({ wineRepository });
const getWineById = makeGetWineById({ wineRepository });

export { createWine, getWines, getWineById };
