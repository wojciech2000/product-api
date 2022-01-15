import { Request, Response } from "express";
import Product from "../../../models/product/product.model";

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const findProduct = await Product.findByIdAndRemove(id);
    res.status(200).json(findProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};
