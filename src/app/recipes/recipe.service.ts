import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://media.istockphoto.com/id/535786572/photo/grilled-striploin-steak.jpg?b=1&s=612x612&w=0&k=20&c=4MAcTyBrF7XkcltOt9WpTXwM6-uuf7qWUP6-j7srefc='),
    new Recipe('Another Test Recipe', 'This is another test', 'https://media.istockphoto.com/id/535786572/photo/grilled-striploin-steak.jpg?b=1&s=612x612&w=0&k=20&c=4MAcTyBrF7XkcltOt9WpTXwM6-uuf7qWUP6-j7srefc='),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
