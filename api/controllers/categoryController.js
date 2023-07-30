const Category = require('./../models/Category')

// all the categories show from database || controller
const categories = async (req, res, next)=> {
    const categoriesData = await Category.find();

    res.status(200).json(categoriesData);
}

// single category add to the database || controller
const addCategory = async (req, res, next)=> {
    const categoryData = req.body;

    const newCategory = new Category(categoryData);
    const result = await newCategory.save();

    res.status(200).json({
        dataInserted: true,
        result
    });
}

module.exports = {
    categories,
    addCategory
}