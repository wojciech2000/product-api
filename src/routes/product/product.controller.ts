import { Router } from "express";
import { validator } from "../../middlewares/validator.middleware";
import { createProduct } from "./create/createProduct.route";
import { createProductValudator } from "./create/createProduct.validator";
import { getProductValidator } from "./get/getProduct.validator";
import { getProduct, getProducts } from "./get/getProduct.route";
import { updateProduct } from "./update/updateProduct.route";
import { updateProductValidator } from "./update/updateProduct.validator";
import { deleteProductValidator } from "./delete/deleteProduct.validator";
import { deleteProduct } from "./delete/deleteProduct.route";

export const productRouter: Router = Router();

productRouter.post("/", createProductValudator, validator, createProduct);
productRouter.get("/:id", getProductValidator, validator, getProduct);
productRouter.get("/", getProducts);
productRouter.put("/:id", updateProductValidator, validator, updateProduct);
productRouter.delete("/:id", deleteProductValidator, validator, deleteProduct);
