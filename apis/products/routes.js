const express = require("express");
const {
  getAllProducts,
  getOneProduct,
  creatOneProduct,
} = require("./controllers");
const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getOneProduct);

router.post("/", creatOneProduct);

module.exports = router;
