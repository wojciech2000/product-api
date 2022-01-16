import Product from "../../../models/product/product.model";
import {
  bodyNameValidator,
  bodyPriceValidator,
  nameIsTaken,
  paramIdValidator,
} from "../common/validator/commonValidatorProducts";

let paramId = "";

const localParamIdValidator = paramIdValidator().custom(id => (paramId = id));
const localBodyNameValidator = bodyNameValidator().custom(async value => {
  // check if name is already taken by other product
  const findProduct = await Product.findOne({ name: value });

  if (findProduct && findProduct?.id !== paramId) {
    return Promise.reject(nameIsTaken);
  }
});
const localBodyPriceValidator = bodyPriceValidator();

export const updateProductValidator = [
  localParamIdValidator,
  localBodyNameValidator,
  localBodyPriceValidator,
];
