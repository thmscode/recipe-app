import { Request, Response } from "express";

export const fetchCategoriesList = async (req: Request, res: Response) => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json());

  return res.status(200).json({ "categories": data });
};

export const fetchCategory = async (req: Request, res: Response) => {
  const { category } = req.params;

  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(res => res.json());

  return res.status(200).json({ "recipes": data });
};