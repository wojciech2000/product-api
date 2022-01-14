import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!validationResult(req).isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  next();
};
