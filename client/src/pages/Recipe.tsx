import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MealRecipe } from '../types';
import { Grid } from '@chakra-ui/react';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Meal from '../components/content/Meal';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<MealRecipe>();

  useEffect(() => {
    fetch(`/api/meal_recipe/${id}`)
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
  )
}

export default Recipe;