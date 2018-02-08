import { Injectable } from '@angular/core';
import {Recipe } from '../recipe';
import {Ingredient} from '../ingredient';

@Injectable()
export class RecipeService {
private   recipes: Recipe[] = [
     new Recipe('Schnitzel', 'Very tasty', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/1200px-Wiener-Schnitzel02.jpg', [
       new Ingredient('Kolhapuri Misal',2),
       new Ingredient('Kolhapuri Mutton',1)
     ]),
     new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
       new Ingredient('Kolhapuri Chappal',2),
       new Ingredient('Kolhapuri Mutton',1)
     ]),
     new Recipe('Dummy','Dummy description','http://thumbs1.ebaystatic.com/d/l225/m/mM5u2kVAYbs3IRlwPfl6uOA.jpg',[
       new Ingredient('Kolhapuri Vadapav',2),
       new Ingredient('Kolhapuri Mutton',1)
     ]),
     new Recipe('Mango','Test it','http://healthyliving.natureloc.com/wp-content/uploads/2015/08/artifical-mango-fruit-in-shops.jpg',[
       new Ingredient('Kolhapuri mirchi',2),
       new Ingredient('Kolhapuri Mutton',1)
     ])
   ];
  constructor() { }

getRecipes(){
  return this.recipes;
}
}
