import { Request, Response, Router } from "express";
import Product from "../../../models/product/product.model";

export const createProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;

  try {
    const newProduct = await Product.create({ name, price: Number(price).toFixed(2) });
    newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};
