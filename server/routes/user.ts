import { Router } from 'express';
import {
  registerUser,
  addRecipeToFavourites
} from '../controllers/user';
import { validateUser } from '../middleware';

const router = Router();

router.post('/register', validateUser, registerUser);
router.post('/addRecipeToFavourites', validateUser, addRecipeToFavourites);

export default router;