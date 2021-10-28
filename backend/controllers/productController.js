const asynchandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc    Get All Products

const getProducts = asynchandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

// @desc    Get Single Product By Id

const getProductById = asynchandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = { getProducts, getProductById };
