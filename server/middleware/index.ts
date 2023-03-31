import { NextFunction, Request, Response } from "express";
const admin = require('../firebase/firebase-config');

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.json({ message: 'Unauthorized' });
  }

  const token = req.headers.authorization?.split(' ')[1];
  const decodedValue = await admin.auth().verifyIdToken(token);

  if (decodedValue) {
    res.locals.uid = decodedValue.uid;
    return next();
  } else {
    return res.json({ message: 'Failed to validate token' });
  }
};