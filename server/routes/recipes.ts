import { Router } from 'express';
import {
  fetchRandomMealRecipe,
  fetchRandomDrinkRecipe,
  fetchMealRecipe
} from '../controllers/recipes';

const router = Router();

router.get('/random_meal', fetchRandomMealRecipe);
router.get('/random_drink', fetchRandomDrinkRecipe);
router.get('/:id', fetchMealRecipe);

export default router;