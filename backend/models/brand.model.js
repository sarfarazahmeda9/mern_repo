import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}, {
    timestamps: true    // Add timestamps to the schema so that createdAt and updatedAt fields are automatically added to the schema
});

const Brand = mongoose.model("Brand", brandSchema);
//productSchema is the schema that we created above
//Product is the model name that we want to use
export default Brand;