require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import { formatMealResponse, formatDrinkResponse } from './utils/index';

const PORT = process.env.PORT;
const app: Express = express();

app.get('/api/countries/:country', async (req: Request, res: Response) => {
  const { country } = req.params;
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    .then(res => res.json());
  res.json({ "countries": data });
});

app.get('/api/countries', async (req: Request, res: Response) => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then(res => res.json());
  res.json({ "countries": data });
});

app.get('/api/meal_recipe/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json());
  const recipe = formatMealResponse({ ...data.meals[0] });
  res.json({ "recipe": recipe });
});

app.get('/api/categories/:category', async (req: Request, res: Response) => {
  const { category } = req.params;
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(res => res.json());
  res.json({ "recipes": data });
});

app.get('/api/categories', async (req: Request, res: Response) => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
  res.json({ "categories": data });
});

app.get('/api/random_drink', async (req: Request, res: Response) => {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json());
  const recipe = formatDrinkResponse({ ...data.drinks[0] });
  res.json({ "recipe": recipe });
});

app.get('/api/random_meal', async (req: Request, res: Response) => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json());
  const recipe = formatMealResponse({ ...data.meals[0] });
  res.json({ "recipe": recipe });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});