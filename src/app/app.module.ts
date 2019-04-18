import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { ButtonSexeComponent } from './button-sexe/button-sexe.component';
import { ButtonGenreComponent } from './button-genre/button-genre.component';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { CarteComponent } from './carte/carte.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnageComponent,
    ButtonSexeComponent,
    ButtonGenreComponent,
    ImagesGridComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
