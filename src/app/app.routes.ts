import { Routes } from '@angular/router';
import { SexeMenuComponent } from './sexe-menu/sexe-menu.component';
import { GenreMenuComponent} from './genre-menu/genre-menu.component';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { BattlePageComponent } from './battle-page/battle-page.component';
const ROUTES: Routes = [
    { path:'sexe-menu', component: SexeMenuComponent},
    { path:'genre-menu', component: GenreMenuComponent},
    { path:'images-grid', component: ImagesGridComponent},
    { path:'battle-page', component: BattlePageComponent},
    { path: "", redirectTo:"sexe-menu", pathMatch: "full"},     
];

export { ROUTES };