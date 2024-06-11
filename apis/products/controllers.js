const Product = require("../../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.json(error);
  }
};

const getOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ msg: "product with this id, not found!" });
    }
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const creatOneProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "create product faild!" });
    }
  } catch (error) {
    return res.status(error.status).json(error);
  }
};

const updateOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "update product faild!" });
    }
  } catch (error) {
    return res.status(error.status).json(error);
  }
};

const delOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id, req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "delete product faild!" });
    }
  } catch (error) {
    return res.status(error.status).json(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  creatOneProduct,
  updateOneProduct,
  delOneProduct,
};
