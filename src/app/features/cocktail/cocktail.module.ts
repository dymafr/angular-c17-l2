import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CocktailListComponent } from "./cocktail-container/cocktail-list/cocktail-list.component";
import { CocktailDetailsComponent } from "./cocktail-container/cocktail-details/cocktail-details.component";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { CocktailFormComponent } from "./cocktail-container/cocktail-form/cocktail-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "../../app.routes";

@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailFormComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule]
})
export class CocktailModule {}
