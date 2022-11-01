import { get, getById, add, Wine } from '../queries';
import { wine } from './helpers/mocks/wine';

describe('get', () => {
  it('returns a colection of wines', async () => {
    const wines = await get();

    expect(wines).toEqual(
      expect.objectContaining<Wine>({} as Wine)
    )
  });
})

describe('getById', () => {
  it('returns a wine by it\'s id', async () => {
    const wines = await getById(1);

    expect(wines).toEqual(
      expect.objectContaining<Wine>({} as Wine)
    )
    expect(wines?.id).toBe(1)
  })
})

describe('add', () => {
  it('returns a colection of wines', async () => {
    const winesList = await get();
    const newWine = await add(wine);

    expect(newWine.id).toBe(2);
    expect(winesList.length).toBe(2);
  });
})
