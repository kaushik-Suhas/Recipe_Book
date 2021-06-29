import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {


    private recipes: Recipe[] = [
        new Recipe('Samosa',
        'Samosa is a deep fried pastry with aspiced filling usually made with potatoes, spices and herbs. Sometimes there are also made with minced meat.',
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Samosa_Recipe_-_A_Mouth_Watering_Indian_Snack_Recipe_By_Sonia_Goyal_%2831078600701%29.jpg',
        [
          new Ingredient('Potatoes', 5),
          new Ingredient('Onion', 2),
          new Ingredient('Flour', 1),
          new Ingredient('Peas', 2)
        ]),
        new Recipe('Pani Puri',
        'Panipuri or puchka or gupchup or golgappa or Pani ke Patake is a type of snack that originated in the Indian subcontinent, and is one of the most common street foods in India, Pakistan, Nepal and Bangladesh.',
        'https://cdn.pixabay.com/photo/2021/01/06/14/01/pani-puri-5894482_1280.jpg',
        [
          new Ingredient('Flour', 1),
          new Ingredient('Onion', 2),
          new Ingredient('Spices', 1),
          new Ingredient('Mint Leaves', 1)
        ])   
      ]; 

      constructor(private slService: ShoppingListService) {}

    getRecipes () {
          return this.recipes.slice();
    }

    getRecipe(index: number){
      return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
      // console.log('hre')
      this.slService.addIngredients(ingredients);
    }
}