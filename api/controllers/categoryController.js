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

// update category || controller
const updateCategory = async (req, res, next)=> {
    const updateData = req.body;
    const categoryId = req.params.id;

    const result = await Category.updateOne({ _id: categoryId }, updateData);
    res.status(200).json({dataUpdated: true, result});
}

// delete category || controller
const deleteCategory = async (req, res, next)=> {
    const categoryId = req.params.id;
    const deletedData = await Category.deleteOne({_id: categoryId});
    res.status(200).json({dataDeleted: true, deletedData});
}


module.exports = {
    categories,
    addCategory,
    updateCategory,
    deleteCategory
}