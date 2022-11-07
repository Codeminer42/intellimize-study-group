import handler from '../pages/api/wines';
import handlerById from '../pages/api/wines/[id]';

// import { Wine } from '../../fake-backend/wineQueries';

import { testHandler } from './helpers/testHandler';

const wineObjectShape = {
  id: 1,
  name: 'Vinho',
  year: 2017,
  wineryOfOrigin: 'Bertoletti',
  mainImage: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg?format=jpg',
  sellingPrice: 300,
  quantity: 10,
  moreDetails: {
    description: 'bla bla bla',
    tags: ['fruity', 'sweet', 'citric'],
    alcohol_content: 14.3,
    buying_price: 180,
    location_in_cellar: {
      section: 'A',
      position: '3',
    },
    color: 'rosé',
  },
};

describe('[GET] /api/wines/', () => {
  it('returns a collection of wines', async () => {
    const res = await testHandler(handler, { method: 'GET' });

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData().data).toHaveLength(1);
    expect(res._getJSONData().data[0]).toMatchObject(wineObjectShape);
  });
});

describe('[GET] /api/wines/[id]', () => {
  it("returns a wine by it's id", async () => {
    const res = await testHandler(handlerById, { method: 'GET', query: { id: '1' } });

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual(
      expect.objectContaining({
        data: expect.arrayContaining([expect.objectContaining(wineObjectShape)]),
      })
    );
    expect(res._getJSONData()['data'].length).toBe(1);
  });

  it('returns a empty array with non existing wine id', async () => {
    const res = await testHandler(handlerById, { method: 'GET', query: { id: 2 } });

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual(
      expect.objectContaining({
        data: [],
      })
    );
    expect(res._getJSONData().data).toHaveLength(0);
  });

  it('returns a 400 status when get a non valid id', async () => {
    const res = await testHandler(handlerById, { method: 'GET', query: { id: 'asdf' } });

    expect(res.statusCode).toEqual(400);
    expect(res._getJSONData()).toMatchObject({ error: 'Invalid wine id' });
  });
});

describe('[POST] /api/wines', () => {
  it('returns a new wine', async () => {
    const newWine = {
      name: 'Vinho',
      year: 2017,
      wineryOfOrigin: 'Bertoletti',
      mainImage: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg?format=jpg',
      sellingPrice: 300,
      quantity: 10,
      moreDetails: {
        description: 'bla bla bla',
        tags: ['fruity', 'sweet', 'citric'],
        alcohol_content: 14.3,
        buying_price: 180,
        location_in_cellar: {
          section: 'A',
          position: '3',
        },
        color: 'rosé',
      },
    };
    const res = await testHandler(handler, { method: 'POST', body: newWine });

    expect(res.statusCode).toBe(201);
  });
});
