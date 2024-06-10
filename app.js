const express = require("express");
const products = require("./data");
const productsRoute = require("./apis/products/routes");
const connectDB = require("./database");

const app = express();
app.use(express.json());

app.use("/api/products", productsRoute);

connectDB();
const port = 8000;

app.listen(port, () => {
  console.log("Server listening on port 8000");
});

// user : wahab password 3nVYOfLUiTr0q0ES
