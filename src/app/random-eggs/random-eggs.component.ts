import { Component, OnInit } from '@angular/core';
import { DataAPIService } from "../../data-api.service";
import { Eggs } from "../eggs";
import { Character } from "../character";

@Component({
  selector: 'app-random-eggs',
  templateUrl: './random-eggs.component.html',
  styleUrls: ['./random-eggs.component.css']
})
export class RandomEggsComponent implements OnInit {
  public eggsList: Eggs[];
  public eggsAdress: string = "https://easteregg.wildcodeschool.fr/api/eggs";
  public charactersList: Character[];
  public charactersAdress: string = "https://easteregg.wildcodeschool.fr/api/characters";
  public randomEgg:Eggs;

  constructor(private myService: DataAPIService) {
    this.eggsList = [];
    this.charactersList = [];
    this.randomEgg = new Eggs();
    
    
  }

  ngOnInit() {
    this.myService.getEggsArray(this.eggsAdress, "health").subscribe(
      (paramEggs: Eggs[]) => {
        this.eggsList = paramEggs;
        this.getRandomEggs();
        console.log(this.randomEgg);
        
      }
    );

    /*this.myService.getCharactersArray(this.charactersAdress).subscribe(
      (paramChar: Character[]) => {
        this.charactersList = paramChar;
      }
    );*/
  }
  public getRandomEggs():Eggs{
    this.randomEgg = this.eggsList[Math.floor((Math.random()*this.eggsList.length))];
    return this.randomEgg;
  }

}
