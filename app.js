const express = require("express");
const products = require("./data");

const app = express();
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;

  const product = products.find((product) => {
    return product.id == id;
  });

  if (product) return res.json(product);
  else {
    return res.json("there is no product with this id");
  }
});

app.post("/api/products", (req, res) => {
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
});

const port = 8000;

app.listen(port, () => {
  console.log("Server listening on port 8000");
});
