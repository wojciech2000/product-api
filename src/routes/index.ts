import { Router } from "express";
import { productRouter } from "./product/product.controller";

export const router = Router();

router.use("/product", productRouter);
