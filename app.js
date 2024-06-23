const express = require("express");
const products = require("./data");
const productsRoute = require("./apis/products/routes");
const connectDB = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");

const app = express();
app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

app.use("/api/products", productsRoute);
app.use("/media", express.static(path.join(__dirname, "media")));

app.use(notFoundHandler);
app.use(errorHandler);

connectDB();
const port = 8000;

app.listen(port, () => {
  console.log("Server listening on port 8000");
});
