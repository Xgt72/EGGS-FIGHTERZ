import { Component, OnInit } from '@angular/core';
import { ButtonGenreComponent } from '../button-genre/button-genre.component';
import { Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-button-sexe',
  templateUrl: './button-sexe.component.html',
  styleUrls: ['./button-sexe.component.css']
})
export class ButtonSexeComponent implements OnInit {

  constructor( private _router:Router ) {}

  ngOnInit() {
  }
  public createSexe(sexe: string) { 
    // tu peux mettre du code ici avant de rediriger vers genre-menu
    this._router.navigate(["/genre-menu"]);
  }
}
