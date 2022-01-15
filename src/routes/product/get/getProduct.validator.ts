import { paramIdValidator } from "../common/validator/commonValidatorProducts";

const localParamIdValidator = paramIdValidator();

export const getProductValidator = [localParamIdValidator];
