const express = require("express");
const router = express.Router();

// all internal imports
const {categories, addCategory} = require("../controllers/categoryController");


// all the categories list show router
router.get("/", categories);

// add a category router
router.post("/", addCategory);


module.exports = router;

