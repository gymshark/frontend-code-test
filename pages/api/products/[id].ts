import type { NextApiRequest, NextApiResponse } from 'next';

import { products } from '../../../data/products.data';

const productHandler = (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const filteredProduct = products.filter((p) => p.id === parseInt(typeof id === 'object' ? id[0] : id));

    if (filteredProduct.length > 0) {
        res.status(200).json(filteredProduct[0]);
    } else {
        res.status(404).json({ message: `Product with id: ${id} not found.` });
    }
};

export default productHandler;
