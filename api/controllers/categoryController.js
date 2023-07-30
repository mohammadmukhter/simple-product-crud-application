

const categories = async (req, res, next)=> {
    res.status(200).json('hello I am a category list');
}


const addCategory = async (req, res, next)=> {
    res.status(200).json('hello add me');
}

module.exports = {
    categories,
    addCategory
}