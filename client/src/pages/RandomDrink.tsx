import { Grid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Drink from '../components/content/Drink';
import { DrinkRecipe } from "../types";

const RandomDrink = () => {
  const [recipe, setRecipe] = useState<DrinkRecipe>();

  useEffect(() => {
    fetch('/api/recipes/random_drink')
      .then(res => res.json())
      .then(data => setRecipe(data.recipe));
  }, []);

  return (
    <Grid
      templateColumns={'repeat(12, 1fr)'}
      templateRows={'repeat(6, auto)'}
      px={48}
      py={8}
      gridGap={4}>
      {(typeof recipe === 'undefined') ?
        <LoadingSpinner /> :
        <Drink recipe={recipe} />}
    </Grid>
  );
}

export default RandomDrink;