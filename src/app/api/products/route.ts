import products from '../../../../data/products.json';

export default function getProducts(req, res) {
    if(req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
  res.status(200).json(products);
}