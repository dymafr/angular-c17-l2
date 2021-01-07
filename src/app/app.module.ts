import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SelectedDirective } from "./shared/directives/selected.directive";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routes";
import { PanierService } from "./shared/services/panier.service";
import { FilterPipe } from "./shared/pipes/filter.pipe";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), HttpClientModule],
  declarations: [AppComponent, HeaderComponent, SelectedDirective, FilterPipe],
  bootstrap: [AppComponent],
  providers: [PanierService]
})
export class AppModule {}
