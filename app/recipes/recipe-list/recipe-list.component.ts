import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe';
import{Ingredient} from '../../ingredient';
import {RecipeService} from '../recipe.service'
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',

})
export class RecipeListComponent implements OnInit {
  items:Ingredient[]=[];
  recipes: Recipe[] = []
@Output() recipeSelected=new EventEmitter<Recipe>()

constructor(private recipeService:RecipeService){}
ngOnInit(){
  this.recipes=this.recipeService.getRecipes();
  console.log(this.recipes)
}


onSelected(recipe:Recipe){
  this.recipeSelected.emit(recipe);
  console.log("onselected called",recipe)
}
}
