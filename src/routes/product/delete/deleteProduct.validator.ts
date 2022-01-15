import { paramIdValidator } from "../common/validator/commonValidatorProducts";

const localParamIdValidator = paramIdValidator();

export const deleteProductValidator = [localParamIdValidator];
