import { bodyNameValidator, bodyPriceValidator } from "../common/validator/commonValidatorProducts";
import { getProductValidator } from "../get/getProduct.validator";

const localBodyNameValidator = bodyNameValidator();
const localBodyPriceValidator = bodyPriceValidator();

export const updateProductValidator = [
  ...getProductValidator,
  localBodyNameValidator,
  localBodyPriceValidator,
];
