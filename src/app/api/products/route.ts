import products from '../../../../data/products.json';

const getProducts = (req, res) => {
  res.status(200).json(products);
}

export default getProducts;