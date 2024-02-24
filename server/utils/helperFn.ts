import { DrinkRecipe, MealRecipe, Drink, Meal } from "./types";

const formatIngredients = (recipe: MealRecipe | DrinkRecipe): string[] => {
  const items: string[] = [];
  const measurements: string[] = [];
  const ingredients: string[] = [];

  for (const [key, value] of Object.entries(recipe)) {
    if (key.includes("strIngredient") && value !== "" && value !== null && value !== " " ) items.push(value);
    if (key.includes("strMeasure") && value !== null) measurements.push(value);
    if (key.includes("strMeasure") && value === null) measurements.push("");
  }

  for (let i = 0; i < items.length; i++) {
    if (measurements[i] === null) ingredients.push(items[i]);
    else ingredients.push(`${measurements[i]} ${items[i]}`);
  }

  return ingredients;
};

export const formatMealResponse = (recipe: MealRecipe): Meal => {
  const ingredients = formatIngredients(recipe);

  const formattedRecipe: Meal = {
    id: recipe.idMeal,
    title: recipe.strMeal,
    category: recipe.strCategory,
    area: recipe.strArea,
    instructions: recipe.strInstructions,
    thumbnail: recipe.strMealThumb,
    youtubeUrl: recipe.strYoutube,
    ingredients,
  };
  return formattedRecipe;
};

export const formatDrinkResponse = (recipe: DrinkRecipe): Drink => {
  const ingredients = formatIngredients(recipe);

  const formattedRecipe: Drink = {
    id: recipe.idDrink,
    title: recipe.strDrink,
    category: recipe.strCategory,
    alcoholic: recipe.strAlcoholic,
    glass: recipe.strGlass,
    instructions: recipe.strInstructions,
    thumbnail: recipe.strDrinkThumb,
    ingredients,
  };
  return formattedRecipe;
};
