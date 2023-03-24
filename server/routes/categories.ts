import { Router } from 'express';
import { fetchCategoriesList, fetchCategory } from '../controllers/categories';

const router = Router();

router.get('/', fetchCategoriesList);
router.get('/:category', fetchCategory);

export default router;