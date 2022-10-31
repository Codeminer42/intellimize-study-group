import { createMocks } from 'node-mocks-http';
import handler from '../../src/pages/api/wines'

describe('/api/wines/', () => {
  it('returns a colection of wines', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    })

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200)
  })
})
