import { Routes } from '@angular/router';
import { SexeMenuComponent } from './sexe-menu/sexe-menu.component';
import { GenreMenuComponent} from './genre-menu/genre-menu.component';

const ROUTES: Routes = [
    { path:'sexe-menu', component: SexeMenuComponent},
    { path:'genre-menu', component: GenreMenuComponent},
    { path: "", redirectTo:"sexe-menu", pathMatch: "full"},     
];

export { ROUTES };