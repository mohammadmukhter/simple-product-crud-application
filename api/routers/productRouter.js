const express = require("express");
const router = express.Router();

// all internal imports
const {products, addProduct, updateProduct, deleteProduct} = require('../controllers/productController');


// all the product get or get by specific product router
router.get("/", products);

// add product router
router.post("/", addProduct);

// product update router
router.patch("/:id", updateProduct);

// product delete router
router.delete("/:id", deleteProduct);

module.exports = router;

