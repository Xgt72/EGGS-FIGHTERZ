import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { specieGender } from "../speciesAndGender";

@Component({
  selector: 'app-genre-menu',
  templateUrl: './genre-menu.component.html',
  styleUrls: ['./genre-menu.component.css']
})
export class GenreMenuComponent implements OnInit {

  public menuSpecieGender: any = specieGender;

  constructor( private _router:Router ) { }

  ngOnInit() {
  }
  public createGenre(genre: string) { 
    // tu peux mettre du code ici avant de rediriger vers genre-menu
    this._router.navigate(["/images-grid"]);
    this.menuSpecieGender.gender = genre;
  }
}
