import { body, param } from "express-validator";
import Product from "../../../../models/product/product.model";

// COMMON VALIDATOR USED ACROSS ROUTES
// WRITTEN AS FUNCTIONS SO ADDING NEW CUSTOM VALIDATOR TO EXISTING ONE
// WON'T APPLY TO GLOBAL VALIDATOR

// Name --------------------------------------------------------------------------------------------------
const nameLengthRange = { min: 3, max: 100 };

const nameIsString = "Name must be a string";
const nameIsLength = `Name must have a length between ${nameLengthRange.min} and ${nameLengthRange.max}`;
export const nameIsTaken = "Name is taken";

export const bodyNameValidator = () =>
  body("name")
    .isString()
    .withMessage(nameIsString)
    .isLength(nameLengthRange)
    .withMessage(nameIsLength);

// Price -------------------------------------------------------------------------------------------------
const priceIsNumeric = "Price must be a number";

export const bodyPriceValidator = () => body("price").isNumeric().withMessage(priceIsNumeric);

// ID ----------------------------------------------------------------------------------------------------
const productNotFound = "Product not found";

export const paramIdValidator = () =>
  param("id").custom(async (id: string) => {
    // check if Product Exists
    try {
      const findProduct = await Product.findById(id);
      if (!findProduct) return Promise.reject(productNotFound);
    } catch (error) {
      return Promise.reject(productNotFound);
    }
  });
