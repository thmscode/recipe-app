import { Request, Response } from "express";
import User from '../models/user';

export const registerUser = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  const uid = res.locals.uid;
  const newUser = new User({ firstName, lastName, uid });
  await newUser.save();
  return res.status(201).json({ message: 'User registered.' });
};

export const addRecipeToFavourites = async (req: Request, res: Response) => {
  const { id, title, imgUrl } = req.body;
  const recipe = { id, title, imgUrl };
  const uid = res.locals.uid;

  try {
    const user = await User.findOne({ "uid": uid });
    user?.favourites.push(recipe);
    await user?.save();
    return res.status(201).json({ message: 'Recipe added to favourites.' });
  } catch (e) {
    return res.status(400).json({ message: 'Failed to add to favourites.' });
  }
};

export const removeRecipeFromFavourites = async (req: Request, res: Response) => {
  const { id } = req.body;
  const uid = res.locals.uid;

  try {
    await User.findOneAndUpdate({ "uid": uid }, { $pull: { favourites: { id } } });
    return res.status(200).json({ message: 'Recipe removed from favourites.' });
  } catch (e) {
    return res.status(400).json({ message: 'Recipe not found.' });
  }
};

export const getFavourites = async (req: Request, res: Response) => {
  const uid = res.locals.uid;
  try {
    const user = await User.findOne({ "uid": uid });
    if (user) return res.status(200).json({ firstName: user.firstName, favourites: user.favourites });
    else return res.status(400).json({ message: 'User not found.' });
  } catch (e) {
    return res.status(400).json({ message: 'User not found.' });
  }
};