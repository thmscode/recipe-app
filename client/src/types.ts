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

export type MealProps = {
  recipe: MealRecipe;
};