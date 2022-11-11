import { WineApiClient } from '../api/wineApiClient';
import { Wine } from '../../domain/Wine';

type MakeGetWinesProps = {
  wineApiClient: WineApiClient;
};

const makeGetWines =
  ({ wineApiClient }: MakeGetWinesProps) =>
  async (): Promise<Wine[]> => {
    const response = await wineApiClient.get<{ data: Wine[] }>('wines');

    const { data: wines } = response.data;

    return wines;
  };

export { makeGetWines };
