import { createMocks } from 'node-mocks-http';

import { products } from '../data/products.data';
import handleProduct from '../pages/api/products/[id]';

const ids = ['1', '2'];

describe('/api/products/[id]', () => {
    test.each(ids)('returns the product with id %p', async (id) => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {
                id,
            },
        });

        await handleProduct(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(expect.objectContaining(products[parseInt(id) - 1]));
    });

    test('returns an array of products', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {
                id: 999,
            },
        });

        await handleProduct(req, res);

        expect(res._getStatusCode()).toBe(404);
    });
});
