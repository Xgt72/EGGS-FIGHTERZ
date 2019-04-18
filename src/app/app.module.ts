import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { ButtonSexeComponent } from './button-sexe/button-sexe.component';
import { ButtonGenreComponent } from './button-genre/button-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnageComponent,
    ButtonSexeComponent,
    ButtonGenreComponent
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
