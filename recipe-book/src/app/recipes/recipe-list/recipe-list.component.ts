import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Samosa',
    'Samosa is a deep fried pastry with aspiced filling usually made with potatoes, spices and herbs. Sometimes there are also made with minced meat.',
    'https://upload.wikimedia.org/wikipedia/commons/3/3d/Samosa_Recipe_-_A_Mouth_Watering_Indian_Snack_Recipe_By_Sonia_Goyal_%2831078600701%29.jpg'),
    new Recipe('Samosa',
    'Samosa is a deep fried pastry with aspiced filling usually made with potatoes, spices and herbs. Sometimes there are also made with minced meat.',
    'https://upload.wikimedia.org/wikipedia/commons/3/3d/Samosa_Recipe_-_A_Mouth_Watering_Indian_Snack_Recipe_By_Sonia_Goyal_%2831078600701%29.jpg')
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    console.log(recipe, 'recipe')
    this.recipeWasSelected.emit(recipe);

  }

}
