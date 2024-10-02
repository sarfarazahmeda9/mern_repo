import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true    // Add timestamps to the schema so that createdAt and updatedAt fields are automatically added to the schema
});

const Product = mongoose.model("Product", productSchema);
//productSchema is the schema that we created above
//Product is the model name that we want to use
export default Product;