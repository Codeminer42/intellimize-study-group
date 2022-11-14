import wineApiClient from './infra/api/wineApiClient';
import { makeCreateWine } from './apps/useCases/CreateWine';
import { makeGetWineById } from './apps/useCases/GetWineById';
import { makeGetWines } from './apps/useCases/GetWines';

const container = {
  getWines: makeGetWines({ wineApiClient }),
  getWineById: makeGetWineById({ wineApiClient }),
  createWine: makeCreateWine({ wineApiClient }),
};

export { container };
export type Container = typeof container;
