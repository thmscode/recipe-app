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
    <>
      <Grid
        px={{ base: '4', sm: '8', md: '20', xl: '36' }}
        py={8}
        gridGap={6}
        templateColumns={{ base: '1fr', md: 'repeat(6, 1fr)' }}
        templateRows={'repeat(4, auto)'}
        templateAreas={{
          base: `"header" "image" "ingredients" "instructions"`,
          md: `
        "header header header header header header" 
        "image image ingredients ingredients ingredients ingredients" 
        "image image ingredients ingredients ingredients ingredients"
        "instructions instructions instructions instructions instructions instructions";`
        }}
      >
        {(typeof recipe === 'undefined') ?
          <LoadingSpinner /> :
          <Drink recipe={recipe} />}
      </Grid>
    </>
  );
}

export default RandomDrink;