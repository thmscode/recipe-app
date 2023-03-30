import { Request, Response } from "express";
import { formatMealResponse, formatDrinkResponse } from "../utils/helperFn";

export const fetchRandomMealRecipe = async (req: Request, res: Response) => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json());

  const recipe = formatMealResponse({ ...data.meals[0] });

  res.json({ "recipe": recipe });
};

export const fetchRandomDrinkRecipe = async (req: Request, res: Response) => {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json());

  const recipe = formatDrinkResponse({ ...data.drinks[0] });

  res.json({ "recipe": recipe });
};

export const fetchMealRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json());

  const recipe = formatMealResponse({ ...data.meals[0] });

  res.json({ "recipe": recipe });
};