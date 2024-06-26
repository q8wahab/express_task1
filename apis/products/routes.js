const express = require("express");
const upload = require("../../middleware/multer");
const {
  getAllProducts,
  getOneProduct,
  creatOneProduct,
  updateOneProduct,
  delOneProduct,
} = require("./controllers");

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getOneProduct);

router.post("/", upload.single("image"), creatOneProduct);

router.put("/:id", updateOneProduct);

router.delete("/:id", delOneProduct);

module.exports = router;
