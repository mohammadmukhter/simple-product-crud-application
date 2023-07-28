const products = async (req, res, next)=> {
    res.json({data: 'all the products'});
}

module.exports = {
    products,
}