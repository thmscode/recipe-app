export type Category = {
  idCategory: number,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string
};

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

export type DrinkProps = {
  recipe: DrinkRecipe;
};

export type Recipe = {
  strMeal: string,
  strMealThumb: string,
  idMeal: string
};

export type UserObject = {
  firstName: string,
  favourites: {
    id: string,
    title: string,
    imgUrl: string
  }[]
};

export type FavouriteBtnProps = {
  recipeId: String,
  recipeTitle: String,
  recipeThumbnail: String
};