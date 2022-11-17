import { Wine } from '../../domain/Wine';
import { WineApiClient } from '../../infra/api/wineApiClient';

type MakeCreateWineProps = {
  wineApiClient: WineApiClient;
};

const makeCreateWine =
  ({ wineApiClient }: MakeCreateWineProps) =>
  async (wineProps: Wine.Props): Promise<Wine.Type> => {
    const wine = Wine.create(wineProps);
    return await wineApiClient.createWine(wine);
  };

export { makeCreateWine };
