const express = require("express");
const asynchandler = require("express-async-handler");
const Product = require("../models/productModel");

const router = express.Router();

// @desc    Get All Products
// @route   /api/products
// @access  Public
router.get(
  "/",
  asynchandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  })
);

// @desc    Get Single Product
// @route   /api/products/:id
// @access  Public
router.get(
  "/:id",
  asynchandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found ...!" });
    }
  })
);

module.exports = router;
