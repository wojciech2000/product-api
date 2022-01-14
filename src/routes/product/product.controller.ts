import { Router } from "express";
import { validator } from "../../middlewares/validator.helper";
import { createProduct } from "./create/createProduct.route";
import { createProductValudator } from "./create/createProduct.validator";
import { getProductValidator } from "./get/getProduct.validator";
import { getProduct, getProducts } from "./get/getProduct.route";

export const productRouter: Router = Router();

productRouter.post("/", createProductValudator, validator, createProduct);
productRouter.get("/:id", getProductValidator, validator, getProduct);
productRouter.get("/", getProducts);