import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  name: String;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const Product = model<IProduct>("Product", ProductSchema);

export default Product;
