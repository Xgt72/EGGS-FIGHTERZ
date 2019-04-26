import { Component, OnInit } from '@angular/core';
import { DataAPIService } from "../../data-api.service";
import { Eggs } from "../eggs";
import { Character } from "../character";

@Component({
  selector: 'app-random-character',
  templateUrl: './random-character.component.html',
  styleUrls: ['./random-character.component.css']
})
export class RandomCharacterComponent implements OnInit {
  public eggsList: Eggs[];
  public eggsAdress: string = "http://easteregg.wildcodeschool.fr/api/eggs";
  public charactersList: Character[];
  public charactersAdress: string = "http://easteregg.wildcodeschool.fr/api/characters";
  public randomEgg:Eggs;
  public randomChar:Character;

  constructor(private myService: DataAPIService) {
    this.eggsList = [];
    this.charactersList = [];
    this.randomEgg = new Eggs();
    this.randomChar = new Character()
    
    
  }

  ngOnInit() {
    /*this.myService.getEggsArray(this.eggsAdress, "health").subscribe(
      (paramEggs: Eggs[]) => {
        this.eggsList = paramEggs;
        this.randomEgg = this.eggsList[Math.floor((Math.random()*this.eggsList.length))];
        console.log(this.randomEgg);
        
      }
    );*/
      
    this.myService.getCharactersArray(this.charactersAdress).subscribe(
      (paramChar: Character[]) => {
        this.charactersList = paramChar;
        this.getRandomCharacter();
        console.log(this.randomChar)
      }
    );
  }
  public getRandomCharacter():Character{
    this.randomChar = this.charactersList[Math.floor((Math.random()*this.charactersList.length))];
    return this.randomChar;
  }
}