import { Wine } from '../../domain/Wine';
import { WineApiClient } from '../../infra/api/wineApiClient';

type MakeCreateWineProps = {
  wineApiClient: WineApiClient;
};

type WineProps = Omit<Wine.Type, 'id'>;

const makeCreateWine =
  ({ wineApiClient }: MakeCreateWineProps) =>
  async (wine: WineProps): Promise<Wine.Type> => {
    const newWine = await wineApiClient.createWine(wine);
    return Wine.create(newWine);
  };

export { makeCreateWine };
