import { z } from 'zod';

export const userSchema = z.object(
  {
    firstName: z.string().min(1).max(20).regex(/^[A-Za-z\- ]+$/i),
    lastName: z.string().min(1).max(20).regex(/^[A-Za-z\- ]+$/i)
  }
);

export const recipeSchema = z.object(
  {
    id: z.string().length(5).regex(/^[0-9]+$/i),
    title: z.string().min(1).max(80).regex(/^[A-Za-z\- ]+$/i),
    imgUrl: z.string().startsWith('https://www.themealdb.com/images/media/meals/').endsWith('.jpg')
  }
);