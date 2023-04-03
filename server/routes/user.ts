import { Router } from 'express';
import {
  registerUser,
  addRecipeToFavourites,
  removeRecipeFromFavourites,
  getFavourites
} from '../controllers/user';
import { validateUser } from '../middleware';

const router = Router();

router.post('/register', validateUser, registerUser);
router.post('/addRecipeToFavourites', validateUser, addRecipeToFavourites);
router.delete('/removeRecipeFromFavourites', validateUser, removeRecipeFromFavourites)
router.get('/getFavourites', validateUser, getFavourites);

export default router;