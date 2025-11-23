const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// @route   GET api/products
// @desc    Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route   POST api/products (Admin only usually, simplified here)
// @desc    Add a product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
