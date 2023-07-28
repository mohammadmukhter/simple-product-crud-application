const Product = require('./../models/Product');


// product insert to database
const addProduct = async(req, res, next)=> {
    const productData = req.body;
    
    const newData = new Product(productData);
    const dataInserted = await newData.save();
    console.log(dataInserted);
    
    res.status(200).json({DataInserted: true, dataInserted});
}


// product update controller
const updateProduct = async (req, res, next)=> {
    const updateData = req.body;
    const productId = req.params.id;
    console.log('hello')

    console.log(productId, updateData);
    const result = await Product.updateOne({ _id: productId }, updateData);

    res.status(200).json({dataUpdated: true, result});
}

// product delete controller
const deleteProduct = async (req, res, next)=> {
    const productId = req.params.id;
    const deletedData = await Product.deleteOne({_id: productId});
    res.status(200).json({dataDeleted: true, deletedData});
}


// all product data or by category data get controller
const products = async (req, res, next)=> {
    const queryParameter = req.query.categoryName;
    
    let productsData;
    if(queryParameter){
        productsData =await Product.find({categoryName: queryParameter});
    }else{
        productsData =await Product.find();
    }

    res.status(200).json(productsData);
}

module.exports = {
    products,
    addProduct,
    updateProduct,
    deleteProduct
}