import { Request, Response } from "express";
import { toFixedPrice } from "../../../helpers/toFixedPrice.helper";
import Product from "../../../models/product/product.model";

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newData = req.body;

  newData.price = toFixedPrice(newData.price);

  try {
    const findProduct = await Product.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).json(findProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};
