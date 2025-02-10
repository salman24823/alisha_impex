import mongoose from "mongoose";

// Define Schema
const Data = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

// Prevent OverwriteModelError
const ProductModel = mongoose.models.Product || mongoose.model("Product", Data);

export default ProductModel;
