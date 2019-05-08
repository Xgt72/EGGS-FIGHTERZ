import { Component, OnInit } from '@angular/core';
import { DataAPIService } from '../../data-api.service';
import { Character } from '../character';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent implements OnInit {
  title = 'EggsFighterz';
  public charactersList: Character[];
  public charactersAdress: string = "https://easteregg.wildcodeschool.fr/api/characters";

  constructor(private myService: DataAPIService) {
    this.charactersList = [];
   }

  ngOnInit() {
    this.myService.getCharactersArray(this.charactersAdress).subscribe(
      (paramChar: Character[]) => {
        this.charactersList = paramChar;
      }
    );
  }

}
