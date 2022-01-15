import {
  bodyNameValidator,
  bodyPriceValidator,
  paramIdValidator,
} from "../common/validator/commonValidatorProducts";

const localParamIdValidator = paramIdValidator();
const localBodyNameValidator = bodyNameValidator();
const localBodyPriceValidator = bodyPriceValidator();

export const updateProductValidator = [
  localParamIdValidator,
  localBodyNameValidator,
  localBodyPriceValidator,
];
