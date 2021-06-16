import { createMocks } from 'node-mocks-http';

import { products } from '../data/products.data';
import handleProducts from '../pages/api/products';

describe('/api/products', () => {
    test('returns an array of products', async () => {
        const { req, res } = createMocks({
            method: 'GET',
        });

        await handleProducts(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(expect.arrayContaining(products));
    });
});
