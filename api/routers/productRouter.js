const express = require("express");
const router = express.Router();

// all internal imports
const {products, addProduct} = require('../controllers/productController');


// all the product get or get by specific product router
router.get("/", products);

// add product router
router.post("/", addProduct);


module.exports = router;

