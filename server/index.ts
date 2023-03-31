require('dotenv').config();
import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import countriesRouter from './routes/countries';
import categoriesRouter from './routes/categories';
import recipesRouter from './routes/recipes';
import userRouter from './routes/user';

const PORT = process.env.PORT ?? 5000;
const DATABASE_URL = process.env.DATABASE_URL ?? 'mongodb://127.0.0.1:27017/recipeAppDB';
const app: Express = express();

mongoose.connect(DATABASE_URL)
  .then(() => console.log('MONGO CONNECTION ESTABLISHED'))
  .catch(e => {
    console.log('MONGO CONNECTION FAILED');
    console.log(e);
  });

app.use(express.json());
app.use(cors());

app.use('/api/countries', countriesRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/recipes', recipesRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});