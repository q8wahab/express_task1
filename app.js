const express = require("express");
const products = require("./data");

const app = express();

app.get("/api/products", (req, res) => {
  res.json(products);
});

const port = 8000;

app.listen(port, () => {
  console.log("Server listening on port 8000");
});
