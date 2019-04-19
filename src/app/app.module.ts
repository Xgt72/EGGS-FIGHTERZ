import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { ButtonSexeComponent } from './button-sexe/button-sexe.component';
import { ButtonGenreComponent } from './button-genre/button-genre.component';
import { SexeMenuComponent } from './sexe-menu/sexe-menu.component';
import { GenreMenuComponent } from './genre-menu/genre-menu.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PersonnageComponent,
    ButtonSexeComponent,
    ButtonGenreComponent,
    SexeMenuComponent,
    GenreMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
