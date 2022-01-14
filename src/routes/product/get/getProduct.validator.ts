import { param } from "express-validator";
import Product from "../../../models/product/product.model";

// Error messages

// ID
const productNotFound = "Product not found";

export const getProductValidator = [
  // ID
  param("id").custom(async (id: string) => {
    // check if Product Exists
    try {
      await Product.findById(id);
    } catch (error) {
      return Promise.reject(productNotFound);
    }
  }),
];
