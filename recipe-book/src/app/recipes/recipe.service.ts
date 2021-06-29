import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe('Samosa',
        'Samosa is a deep fried pastry with aspiced filling usually made with potatoes, spices and herbs. Sometimes there are also made with minced meat.',
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Samosa_Recipe_-_A_Mouth_Watering_Indian_Snack_Recipe_By_Sonia_Goyal_%2831078600701%29.jpg'),
        new Recipe('Another Samosa',
        'Samosa is a deep fried pastry with aspiced filling usually made with potatoes, spices and herbs. Sometimes there are also made with minced meat.',
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Samosa_Recipe_-_A_Mouth_Watering_Indian_Snack_Recipe_By_Sonia_Goyal_%2831078600701%29.jpg')   
      ]; 

    getRecipes () {
          return this.recipes.slice();
    }
}