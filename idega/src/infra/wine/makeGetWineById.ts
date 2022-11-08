import { WineApiClient } from '../api/wineApiClient';
import { Wine } from '../../domain/Wine';

type MakeGetWineByIdProps = {
  wineApiClient: WineApiClient;
};

const makeGetWineById =
  ({ wineApiClient }: MakeGetWineByIdProps) =>
  async (wineId: number) => {
    const response = await wineApiClient.get<Wine>(`wines/${wineId}`);

    return response.data;
  };

export { makeGetWineById };
