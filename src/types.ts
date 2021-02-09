export interface Recipe {
  recipeName: string;
  instructions: string;
  thumbnail: string;
  youtube: string;
  ingredients: IngredientsEntity[];
  cuisine: string;
  tags: string[];
  category: string;
  source: string;
}
export interface IngredientsEntity {
  name: string;
  amount: string;
}
