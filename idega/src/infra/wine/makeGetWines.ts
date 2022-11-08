import { WineApiClient } from '../api/wineApiClient';
import { Wine } from '../../domain/Wine';

type MakeGetWinesProps = {
  wineApiClient: WineApiClient;
};

const makeGetWines =
  ({ wineApiClient }: MakeGetWinesProps) =>
  async () => {
    const response = await wineApiClient.get<Wine[]>('wines');

    return response.data;
  };

export { makeGetWines };
