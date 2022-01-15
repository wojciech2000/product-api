import Product from "../../../models/product/product.model";
import { bodyNameValidator, bodyPriceValidator } from "../common/validator/commonValidatorProducts";

const nameIsTaken = "Name is taken";

const localBodyNameValidator = bodyNameValidator().custom(async (value: string) => {
  // check if Product of passed name already exists
  const findProduct = await Product.findOne({ name: value });

  if (findProduct) {
    return Promise.reject(nameIsTaken);
  }
});

const localBodyPriceValidator = bodyPriceValidator();

export const createProductValudator = [localBodyNameValidator, localBodyPriceValidator];
