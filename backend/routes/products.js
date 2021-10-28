const express = require("express");
const {
  getProducts,
  getProductById,
} = require("../controllers/productController");

const router = express.Router();

// @desc    Get All Products
// @route   /api/products
// @access  Public
router.get("/", getProducts);

// @desc    Get Single Product
// @route   /api/products/:id
// @access  Public
router.get("/:id", getProductById);

module.exports = router;
