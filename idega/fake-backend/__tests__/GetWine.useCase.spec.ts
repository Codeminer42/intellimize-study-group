import { wineRepository } from '../infra/WineRepository';
import { makeGetWineById } from '../application/useCases/GetWineById';

const fakeGetWineById = makeGetWineById({ wineRepository });

describe('Use Cases: GetWineById', () => {
  it('returns a new wine', async () => {
    const wineId = 1;
    const wine = await fakeGetWineById(wineId);

    expect(wine!.id).toBe(wineId);
  });

  it('returns undefined with a non existing id', async () => {
    const wineId = 2;
    const wine = await fakeGetWineById(wineId);

    expect(wine).toBeUndefined();
  });

  it('throw an error with a invalid id type', async () => {
    const wineId = 'asdf';
    const errorMessage = new Error('Invalid wine id');
    const getById = () => fakeGetWineById(Number(wineId));

    await expect(getById()).rejects.toEqual(errorMessage);
  });
});
