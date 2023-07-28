const Product = require('./../models/Product');


// product insert to database
const addProduct = async(req, res, next)=> {
    const productData = req.body;
    
    const newData = new Product(productData);
    const dataInserted = await newData.save();
    console.log(dataInserted);
    
    res.status(200).json(dataInserted);
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
}