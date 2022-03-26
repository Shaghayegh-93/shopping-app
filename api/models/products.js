import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    offPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
