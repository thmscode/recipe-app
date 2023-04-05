import { Router } from 'express';
import {
  registerUser,
  addRecipeToFavourites,
  removeRecipeFromFavourites,
  getFavourites,
  isRecipeFavourited
} from '../controllers/user';
import {
  validateUser,
  validateRegisterReqBody,
  validateRecipeReqBody
} from '../middleware';

const router = Router();

router.post('/register', validateUser, validateRegisterReqBody, registerUser);
router.post('/addRecipeToFavourites', validateUser, validateRecipeReqBody, addRecipeToFavourites);
router.delete('/removeRecipeFromFavourites', validateUser, removeRecipeFromFavourites)
router.get('/getFavourites', validateUser, getFavourites);
router.post('/isRecipeFavourited', validateUser, isRecipeFavourited);

export default router;