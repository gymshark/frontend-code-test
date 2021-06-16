import type { NextApiRequest, NextApiResponse } from 'next';

import { products } from '../../../data/products.data';

const handleProducts = (_req: NextApiRequest, res: NextApiResponse) => res.status(200).json(products);

export default handleProducts;
