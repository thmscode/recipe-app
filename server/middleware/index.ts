import { NextFunction, Request, Response } from "express";
const admin = require('../firebase/firebase-config');
import { userSchema, recipeSchema } from "../zod-schemas";

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = req.headers.authorization?.split(' ')[1];
  const decodedValue = await admin.auth().verifyIdToken(token);

  if (decodedValue) {
    res.locals.uid = decodedValue.uid;
    return next();
  } else {
    return res.status(401).json({ message: 'Failed to validate token' });
  }
};

export const validateRegisterReqBody = (req: Request, res: Response, next: NextFunction) => {
  try {
    userSchema.parse(req.body);
    return next();
  } catch (e) {
    return res.status(400).json({ message: 'Request body failed validation.' });
  }
};

export const validateRecipeReqBody = (req: Request, res: Response, next: NextFunction) => {
  try {
    recipeSchema.parse(req.body);
    return next();
  } catch (e) {
    return res.status(400).json({ message: 'Request body failed validation.' });
  }
};