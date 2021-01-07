import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SelectedDirective } from "./shared/directives/selected.directive";
import { PanierContainerComponent } from "./panier-container/panier-container.component";
import { IngredientListComponent } from "./panier-container/ingredient-list/ingredient-list.component";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routes";
import { PanierService } from "./shared/services/panier.service";
import { FilterPipe } from "./shared/pipes/filter.pipe";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
    FilterPipe
  ],
  bootstrap: [AppComponent],
  providers: [PanierService]
})
export class AppModule {}
