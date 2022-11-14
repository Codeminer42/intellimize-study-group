import { Wine } from '../../domain/Wine';
import { WineApiClient } from '../../infra/api/wineApiClient';

type MakeGetWineByIdProps = {
  wineApiClient: WineApiClient;
};

const makeGetWineById =
  ({ wineApiClient }: MakeGetWineByIdProps) =>
  async (wineId: number): Promise<Wine.Type> =>
    await wineApiClient.getWineById(wineId);

export { makeGetWineById };
