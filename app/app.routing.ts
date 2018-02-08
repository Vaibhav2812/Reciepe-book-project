import {RouterModule,Routes} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {RECIPE_ROUTES} from "./recipes/recipe.route";




const APP_ROUTES:Routes=[
  {path:'',component:RecipesComponent},
  {path:'recipes',component:RecipesComponent,children:RECIPE_ROUTES},
  {path:'shopping-list',component:ShoppingListComponent},
]

export const routing =RouterModule.forRoot(APP_ROUTES);
