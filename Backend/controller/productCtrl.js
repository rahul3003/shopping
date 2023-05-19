const Product = require('../modules/productModel.js')
const asyncHandler = require('express-async-handler')


const createProduct = asyncHandler(async (req, res) => {
console.log(req,res)
})

module.exports = {
    createProduct
}