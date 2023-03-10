import * as mongoose from "mongoose";

export const FeatureSchema = new mongoose.Schema({
    type: String,
    name: String,
    enumerable: [String],
    options: [String],
    required: Boolean,
    priceAdded: Number
})


const CategorySchema = new mongoose.Schema({
    name: String,
})

export const CategoryModel =  mongoose.model('Category', CategorySchema);

export const ProductSchema = new mongoose.Schema({
    id: Number,
    name: String,
    features: [FeatureSchema],
    images: [String],
    preview: String,
    description: String,
    price: Number,
    discount: Number,
    category: String,
    isTrending: Boolean,
    visible: Boolean,
    date: Date,
    username: String
})
