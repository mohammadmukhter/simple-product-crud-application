const express = require("express");
const router = express.Router();

// all internal imports
const {categories, addCategory, updateCategory, deleteCategory} = require("../controllers/categoryController");


// all the categories list show router
router.get("/", categories);

// add a category router
router.post("/", addCategory);

// category update router
router.patch("/:id", updateCategory);

// category delete router
router.delete("/:id", deleteCategory);


module.exports = router;

