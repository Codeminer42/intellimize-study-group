import { WineApiClient } from '../api/wineApiClient';
import { Wine } from '../../domain/Wine';

type MakeGetWineByIdProps = {
  wineApiClient: WineApiClient;
};

const makeGetWineById =
  ({ wineApiClient }: MakeGetWineByIdProps) =>
  async (wineId: number): Promise<Wine> => {
    const response = await wineApiClient.get<{ data: Wine }>(`wines/${wineId}`);

    const { data: wines } = response.data;

    return wines;
  };

export { makeGetWineById };
