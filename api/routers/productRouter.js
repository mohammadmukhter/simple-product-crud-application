const express = require("express");
const router = express.Router();

// all internal imports
const {products} = require('./../controllers/prodcutController');


// all the product get router
router.get("/", products);

module.exports = router;

