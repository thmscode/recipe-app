import { Router } from 'express';
import {
  registerUser
} from '../controllers/user';
import { validateUserForRegistration } from '../middleware';

const router = Router();

router.post('/register', validateUserForRegistration, registerUser);

export default router;