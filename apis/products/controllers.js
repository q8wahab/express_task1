const products = require("../../data");

const getAllProducts = (req, res) => {
  res.json(products);
};

const getOneProduct = (req, res) => {
  const id = req.params.id;

  const product = products.find((product) => {
    return product.id == id;
  });

  if (product) return res.json(product);
  else {
    return res.json("there is no product with this id");
  }
};

const creatOneProduct = (req, res) => {
  const { id, name, slug, image, description, quantity, color, price } =
    req.body;
  if (
    id &&
    name &&
    slug &&
    image &&
    description &&
    quantity &&
    color &&
    price
  ) {
    products.push(req.body);

    return res.json(products);
  } else {
    return res.json("Please provide all the information needed");
  }
};
module.exports = { getAllProducts, getOneProduct, creatOneProduct };
