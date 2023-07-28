const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
        },
        categoryName: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ['available', 'sold out'],
            default: 'sold out',
        },   
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;