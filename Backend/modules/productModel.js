const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.schema.Types.ObjectId,
        ref: "Category"
    },
    brand: {
        type: String,
        enum: ["Apple", "Red mi", "One plus"]
    },
    quantity: Number,
    sold: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
    },
    color: {
        type: String,
        enum: ['Black', "Blue", "Red"]
    },
    ratings: [{
        star: Number,
        postedBy: {
            type: mongoose.schema.Types.ObjectId,
            ref: "User"
        }
    }],

}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Product', productSchema);