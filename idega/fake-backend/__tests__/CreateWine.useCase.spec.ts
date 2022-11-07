import { Wine } from '../domain/Wines';
import { WineRepository } from '../domain/wineRepository';
import { makeCreateWine } from '../application/useCases/CreateWine';

import { wine } from './helpers/mocks/wine';

describe('Use Cases: CreateWine', () => {
  const fakeWineRepository: WineRepository = {
    getNextId: () => 2,
    getAll: null as any,
    getById: null as any,
    save: jest.fn()
  };

  const createWine = makeCreateWine({ wineRepository: fakeWineRepository });
  it('returns a new wine', async () => {
    const newWine = await createWine(wine());

    expect(newWine.id).toBe(2);
    expect(newWine).toMatchObject({ id: 2, ...wine() });
  });
});

describe('Use Cases: CreateWine', () => {
  const fakeWineRepository: WineRepository = {
    getNextId: () => 2,
    getAll: null as any,
    getById: null as any,
    save: jest.fn()
  };

  const createWine = makeCreateWine({ wineRepository: fakeWineRepository });

  it('returns a new wine', async () => {
    const { name, ...rest } = wine();
    const errorMessage = new Error('Missing some required fields')

    const create = () => createWine(rest as Wine.Type);

    await expect(create()).rejects.toEqual(errorMessage);

  });
});
