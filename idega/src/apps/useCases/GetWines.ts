import { Wine } from '../../domain/Wine';
import { WineApiClient } from '../../infra/api/wineApiClient';

type MakeGetWinesProps = {
  wineApiClient: WineApiClient;
};

const makeGetWines =
  ({ wineApiClient }: MakeGetWinesProps) =>
  async (): Promise<Wine.Type[]> =>
    await wineApiClient.getWines();

export { makeGetWines };
