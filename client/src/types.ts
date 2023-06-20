export type MealRecipe = {
  id: string,
  title: string,
  category: string,
  area: string,
  instructions: string,
  thumbnail: string,
  youtubeUrl: string,
  ingredients: string[]
};

export type DrinkRecipe = {
  id: string,
  title: string,
  category: string,
  alcoholic: string,
  glass: string,
  instructions: string,
  thumbnail: string,
  ingredients: string[]
};

export type Recipe = {
  strMeal: string,
  strMealThumb: string,
  idMeal: string
};