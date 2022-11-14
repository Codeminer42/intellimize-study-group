import { Wine } from '../../domain/Wine';
import { WineApiClient } from '../../infra/api/wineApiClient';

type MakeGetWineByIdProps = {
  wineApiClient: WineApiClient;
};

const makeGetWineById =
  ({ wineApiClient }: MakeGetWineByIdProps) =>
  async (wineId: number): Promise<Wine.Type> => {
    const wine = await wineApiClient.getWineById(wineId);
    return Wine.create(wine);
  };

export { makeGetWineById };
