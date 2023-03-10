require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import { formatResponse } from './utils/index';

const PORT = process.env.PORT;
const app: Express = express();

app.get('/random_meal', async (req: Request, res: Response) => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json());
  const recipe = formatResponse({...data.meals[0]});
  res.json({ "recipe": recipe });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});