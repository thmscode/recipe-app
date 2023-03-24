import { Request, Response } from "express";

export const fetchCountriesList = async (req: Request, res: Response) => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then(res => res.json());

  res.json({ "countries": data });
};

export const fetchCountry = async (req: Request, res: Response) => {
  const { country } = req.params;

  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    .then(res => res.json());

  res.json({ "recipes": data });
};