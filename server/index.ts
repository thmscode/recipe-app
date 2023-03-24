require('dotenv').config();
import express, { Express } from 'express';
import cors from 'cors';
import countriesRouter from './routes/countries';
import categoriesRouter from './routes/categories';
import recipesRouter from './routes/recipes';

const PORT = process.env.PORT;
const app: Express = express();

app.use(express.json());
app.use(cors());

app.use('/api/countries', countriesRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/recipes', recipesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});