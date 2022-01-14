import { body } from "express-validator";
import Product from "../../../models/product/product.model";

// Error messages

// Name
const nameLengthRange = { min: 3, max: 100 };

const nameIsString = "Name must be a string";
const nameIsLength = `Name must have a length between ${nameLengthRange.min} and ${nameLengthRange.max}`;
const nameIsTaken = "Name is taken";

// Price
const priceIsNumeric = "Price must be a number";

export const createProductValudator = [
  // NAME
  body("name")
    .isString()
    .withMessage(nameIsString)

    .isLength(nameLengthRange)
    .withMessage(nameIsLength)

    .custom(async (value: string) => {
      // check if Product of passed name already exists
      const findProduct = await Product.findOne({ name: value });

      if (findProduct) {
        return Promise.reject(nameIsTaken);
      }
    }),

  // PRICE
  body("price").isNumeric().withMessage(priceIsNumeric),
];
