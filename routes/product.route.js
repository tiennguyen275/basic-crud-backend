const express = require("express");
const Product = require("../models/product.model.js");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", createProduct);

//update product
router.put("/:id", updateProduct);

//delete product
router.delete("/:id", deleteProduct);

module.exports = router;
