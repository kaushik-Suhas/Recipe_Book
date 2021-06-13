import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://upload.wikimedia.org/wikipedia/commons/3/3d/Samosa_Recipe_-_A_Mouth_Watering_Indian_Snack_Recipe_By_Sonia_Goyal_%2831078600701%29.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
