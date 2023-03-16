import { Grid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { MealRecipe } from "../types";
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Meal from "../components/content/Meal";

const RandomMeal = () => {
  const [recipe, setRecipe] = useState<MealRecipe>();

  useEffect(() => {
    fetch('/api/random_meal')
      .then(res => res.json())
      .then(data => setRecipe(data.recipe));
  }, []);

  return (
    <Grid
      templateColumns={'repeat(12, auto)'}
      templateRows={'repeat(6, auto)'}
      px={48}
      py={8}
      gridGap={4}
    >
      {(typeof recipe === 'undefined') ?
        <LoadingSpinner /> :
        <Meal recipe={recipe} />}
    </Grid>
  );
}

export default RandomMeal;