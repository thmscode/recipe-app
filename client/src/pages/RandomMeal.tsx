import { Grid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { MealRecipe } from "../types";
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Meal from "../components/content/Meal";

const RandomMeal = () => {
  const [recipe, setRecipe] = useState<MealRecipe>();

  useEffect(() => {
    fetch('/api/recipes/random_meal')
      .then(res => res.json())
      .then(data => setRecipe(data.recipe));
  }, []);

  return (
    <Grid
      px={{ base: '4', sm: '8', md: '20', xl: '36' }}
      py={8}
      gridGap={4}
      templateColumns={{ base: '1fr', md: 'repeat(6, 1fr)' }}
      templateRows={'repeat(4, auto)'}
      templateAreas={{
        base: `"header" "image" "ingredients" "instructions"`,
        md: `
        "header header header header header header"
        "image image ingredients ingredients ingredients ingredients"
        "image image ingredients ingredients ingredients ingredients"
        "instructions instructions instructions instructions instructions instructions"
        `
      }}>
      {(typeof recipe === 'undefined') ?
        <LoadingSpinner /> :
        <Meal recipe={recipe} />}
    </Grid>
  );
}

export default RandomMeal;