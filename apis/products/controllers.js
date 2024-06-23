const Product = require("../../models/Product");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ msg: "product with this id, not found!" });
    }
  } catch (error) {
    next(error);
  }
};

const creatOneProduct = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }

    const product = await Product.create(req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "create product faild!" });
    }
  } catch (error) {
    next(error);
  }
};

const updateOneProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "update product faild!" });
    }
  } catch (error) {
    next(error);
  }
};

const delOneProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id, req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "delete product faild!" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  creatOneProduct,
  updateOneProduct,
  delOneProduct,
};
