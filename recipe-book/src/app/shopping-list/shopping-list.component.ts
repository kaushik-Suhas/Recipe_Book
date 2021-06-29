import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChabgeSub: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredient() 
    this.igChabgeSub = this.slService.ingredientsChanged
    .subscribe(
        (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  
  ngOnDestroy() {
    this.igChabgeSub.unsubscribe();
  }
}
