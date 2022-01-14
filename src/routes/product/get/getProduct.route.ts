import { Request, Response, Router } from "express";
import Product from "../../../models/product/product.model";

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const findProduct = await Product.findById(id);
    res.status(201).json(findProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getProducts = async (_: Request, res: Response) => {
  try {
    const findProducts = await Product.find();
    res.status(201).json(findProducts);
  } catch (error) {
    res.status(400).json(error);
  }
};
