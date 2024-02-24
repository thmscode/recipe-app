interface Recipe {
  id: string;
  title: string;
  category: string;
  instructions: string;
  thumbnail: string;
  ingredients: string[];
}

export interface MealRecipe extends Recipe {
  area: string;
  youtubeUrl: string;
}

export interface DrinkRecipe extends Recipe {
  alcoholic: string;
  glass: string;
}

export type RecipeCard = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};
