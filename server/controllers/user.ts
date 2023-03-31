import { Request, Response } from "express";
import User from '../models/user';

export const registerUser = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  const uid = res.locals.uid;
  const newUser = new User({ firstName, lastName, uid });
  await newUser.save();
};