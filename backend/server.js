const express = require("express");
const dotenv = require("dotenv");
const products = require("./data/products");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("eCommerce API Server is up and running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server connected in ${process.env.NODE_ENV} @port ${PORT}`)
);
