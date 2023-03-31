import { Request, Response } from "express";
import User from '../models/user';

export const registerUser = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  const uid = res.locals.uid;
  const newUser = new User({ firstName, lastName, uid });
  await newUser.save();
  return res.json({ message: 'User registered.' });
};

export const addRecipeToFavourites = async (req: Request, res: Response) => {
  const { id, title, imgUrl } = req.body;
  const recipe = { id, title, imgUrl };
  const uid = res.locals.uid;

  try {
    const user = await User.findOne({ "uid": uid });
    user?.favourites.push(recipe);
    await user?.save();
    return res.json({ message: 'Recipe added to favourites.' })
  } catch (e) {
    return res.json({ message: 'Failed to add to favourites.' })
  }
};