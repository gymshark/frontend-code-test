import type { NextApiRequest, NextApiResponse } from 'next';

import { products } from '../../../data/products.data';
import { ProductProps } from '../../../@types';

export const filterProducts = (id: string | string[]): ProductProps =>
    products.filter((p) => p.id === parseInt(typeof id === 'object' ? id[0] : id, 10))[0];

const handleProduct = (req: NextApiRequest, res: NextApiResponse): void => {
    const { id } = req.query;

    const filteredProduct = filterProducts(id);

    if (filteredProduct) {
        res.status(200).json(filteredProduct);
    } else {
        res.status(404).json({ message: `Product with id: ${id} not found.` });
    }
};

export default handleProduct;
