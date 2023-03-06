require('dotenv').config();
import express, { Express, Request, Response } from 'express';

const PORT = process.env.PORT;
const app: Express = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});