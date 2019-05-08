import { Component, OnInit } from '@angular/core';
import { DataAPIService } from "../data-api.service";
import { Eggs } from "../app/eggs";
import { Character } from "../app/character";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EggsFighterz';
  public eggsList: Eggs[];
  public eggsAdress: string = "https://easteregg.wildcodeschool.fr/api/eggs";
  public charactersList: Character[];
  public charactersAdress: string = "https://easteregg.wildcodeschool.fr/api/characters";

  constructor(private myService: DataAPIService) {
    this.eggsList = [];
    this.charactersList = []; 
    
  }

  ngOnInit() {
    this.myService.getEggsArray(this.eggsAdress, "health").subscribe(
      (paramEggs: Eggs[]) => {
        this.eggsList = paramEggs;
      }
    );

    this.myService.getCharactersArray(this.charactersAdress).subscribe(
      (paramChar: Character[]) => {
        this.charactersList = paramChar;
      }
    );
  }
}
