import { WineApiClient } from '../api/wineApiClient';
import { Wine } from '../../domain/Wine';

type MakeCreateWineProps = {
  wineApiClient: WineApiClient;
};

type WineProps = Omit<Wine, 'id'>;

const makeCreateWine =
  ({ wineApiClient }: MakeCreateWineProps) =>
  async (wine: WineProps): Promise<Wine> => {
    const response = await wineApiClient.post<{ data: Wine }>(`wines`, wine);

    const { data: wines } = response.data;

    return wines;
  };

export { makeCreateWine };
