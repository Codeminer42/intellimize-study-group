import { Wine } from '../../domain/Wine';
import { WineApiClient } from '../../infra/api/wineApiClient';

type MakeGetWinesProps = {
  wineApiClient: WineApiClient;
};

const makeGetWines =
  ({ wineApiClient }: MakeGetWinesProps) =>
  async (): Promise<Wine.Type[]> => {
    const wines = await wineApiClient.getWines();
    return wines.map((wine) => Wine.create(wine));
  };

export { makeGetWines };
