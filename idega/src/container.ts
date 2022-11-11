import wineApiClient from './infra/api/wineApiClient';
import { makeGetWineById } from './infra/wine/makeGetWineById';
import { makeGetWines } from './infra/wine/makeGetWines';

const container = {
  getWines: makeGetWines({ wineApiClient }),
  getWineById: makeGetWineById({ wineApiClient }),
};

export { container };
export type Container = typeof container;
