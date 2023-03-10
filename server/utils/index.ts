import { APIMealRecipe, MealRecipe } from "./types";

const formatIngredients = (recipe: APIMealRecipe) => {
  const items: string[] = [];
  const measurements: string[] = [];
  const ingredients: string[] = [];

  for(const [key, value] of Object.entries(recipe)) {
    if (key.includes('strIngredient') && value !== '') items.push(value);
    if (key.includes('strMeasure') && value !== ' ') measurements.push(value);
  }

  for (let i = 0; i < items.length; i++) {
    ingredients.push(`${measurements[i]} ${items[i]}`);
  }

  return ingredients;
};

export const formatResponse = (recipe: APIMealRecipe) => {
  const ingredients = formatIngredients(recipe);

  const formattedRecipe: MealRecipe = {
    "id": recipe.idMeal,
    "title": recipe.strMeal,
    "category": recipe.strCategory,
    "area": recipe.strArea,
    "instructions": recipe.strInstructions,
    "thumbnail": recipe.strMealThumb,
    "youtubeUrl": recipe.strYoutube,
    ingredients
  }
  return formattedRecipe;
};