import { Router } from 'express';
import { fetchCountriesList, fetchCountry } from '../controllers/countries';

const router = Router();

router.get('/', fetchCountriesList);
router.get('/:country', fetchCountry);

export default router;