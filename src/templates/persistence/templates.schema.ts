import {FeatureSchema} from "../../products/persistence/product.schema";

import * as mongoose from "mongoose";

export const TemplateSchema = new mongoose.Schema({
    name: String,
    features: [FeatureSchema],
    username: String
})
