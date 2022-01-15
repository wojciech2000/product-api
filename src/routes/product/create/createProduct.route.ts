import { Request, Response } from "express";
import { toFixedPrice } from "../../../helpers/toFixedPrice.helper";
import Product from "../../../models/product/product.model";

export const createProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;

  try {
    const newProduct = await Product.create({ name, price: toFixedPrice(price) });
    newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};
