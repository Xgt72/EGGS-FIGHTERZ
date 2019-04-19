import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Character } from "../character";
import { Eggs } from "../eggs";
import { choosenHero } from "../hero";
import { choosenOpponent } from "../opponent";
import { RandomCharacterComponent } from "../random-character/random-character.component";
import { RandomEggsComponent } from "../random-eggs/random-eggs.component";
import { DataAPIService } from "../../data-api.service";

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.css']
})
export class BattlePageComponent implements OnInit, AfterViewChecked {

  private battleMusics: string[] = ["05.KenStage.mp3", "12.Chun-LiStage.mp3", "33.GuileStage.mp3", "36.DhalsimStage.mp3", "39.BlankaStage.mp3"];
  public musicIndex: number;
  public battleMusic: string;
  public heroHealth: number;
  public opponentHealth: number;
  public hero: Character;
  public opponent: Character;
  // public randomCharacter: RandomCharacterComponent;
  // public randomEgg: RandomEggsComponent;
  public egg: Eggs;
  public impactHero: string;
  public impactOpponent: string;
  public eggsList: Eggs[];
  public eggsAdress: string = "http://easteregg.wildcodeschool.fr/api/eggs";
  public charactersList: Character[];
  public charactersAdress: string = "http://easteregg.wildcodeschool.fr/api/characters";

  constructor(private myService: DataAPIService) {

    this.musicIndex = 2;
    this.heroHealth = 50;
    this.opponentHealth = 50;
    this.hero = new Character();
    this.opponent = new Character();
    this.eggsList = [];
    this.charactersList = [];



  }

  ngOnInit() {
    this.myService.getCharactersArray(this.charactersAdress).subscribe(
      (paramChar: Character[]) => {
        this.charactersList = paramChar;
      }
    );

    this.myService.getEggsArray(this.eggsAdress, "health").subscribe(
      (paramEggs: Eggs[]) => {
        this.eggsList = paramEggs;
      }
    );

  }

  ngAfterViewChecked() {
    // this.battleMusic = "../../assets/Musics Street/" + this.battleMusics[this.musicIndex];
    // console.log(this.battleMusic);
    this.hero = { id: "5cac51240d488f0da6151c4b", name: "Antenna Rick", species: "Human", gender: "Male", origin: "Unknow", image: "https://images.innoveduc.fr/easter_hackathon/19.jpeg", skills: ["resurrection:8", "pass through walls:9", "resurrection:8"] };
    this.opponent = this.getRandomCharacter();


  }

  public nextTurn() {
    // this.hero = { id: "5cac51240d488f0da6151c4b", name: "Antenna Rick", species: "Human", gender: "Male", origin: "Unknow", image: "https://images.innoveduc.fr/easter_hackathon/19.jpeg", skills: ["resurrection:8", "pass through walls:9", "resurrection:8"] };
    // this.opponent = this.getRandomCharacter();
    console.log(this.hero)
    console.log(this.heroHealth);
    console.log(this.opponent);
    console.log(this.opponentHealth);

    // Hero turn

    this.battle("Hero");
    console.log("Héro :" + this.heroHealth);
    console.log("Adversaire :" + this.opponentHealth);
    // Opponent turn
    this.battle("Opponent");
    console.log("Héro :" + this.heroHealth);
    console.log("Adversaire :" + this.opponentHealth);

  }

  public battle(char: string): void {
    if (this.heroHealth > 0 && this.opponentHealth > 0) {
      // récuperer un nouvel egg
      let egg = new Eggs();
      egg = this.getRandomEggs();
      // console.log(egg);

      let power = egg.power.split(" ");
      console.log(power);
      let powerNumber = power[1].split(":");
      // console.log(powerNumber);
      let powerQuantity = Number(powerNumber[1]);
      // console.log(powerQuantity);

      if (char == "Hero") {
        if (egg.power.includes("increase")) {
          if (this.heroHealth <= 50) {
            this.heroHealth += powerQuantity;
            this.impactHero = "+" + powerQuantity;
            // console.log(this.heroHealth);
          }
          if (this.heroHealth > 50) {
            this.heroHealth = 50;
          }
          // console.log(this.heroHealth);

        } else if (egg.power.includes("decrease")) {
          this.opponentHealth -= 2.5 * powerQuantity;
          this.impactOpponent = "-" + powerQuantity;

          if (this.opponentHealth <= 0) {
            console.log("Your opponent is Dead !!");
          }
          // console.log(this.opponentHealth);
        }
      } else if (char == "Opponent") {
        if (egg.power.includes("increase")) {
          if (this.opponentHealth < 50) {
            this.opponentHealth += powerQuantity;
            this.impactOpponent = "+" + powerQuantity;
          }
          if (this.opponentHealth > 50) {
            this.opponentHealth = 50;
          }
        } else if (egg.power.includes("decrease")) {
          this.heroHealth -= 2.5 * powerQuantity;
          this.impactHero = "-" + powerQuantity;

          if (this.heroHealth <= 0) {
            console.log("Your Hero is Dead !!");
          }
        }
      } else if (this.heroHealth <= 0) {
        console.log("Choose a new Hero to play again")
      }

    }

  }

  public getRandomCharacter(): Character {
    return this.charactersList[Math.floor((Math.random() * this.charactersList.length))];
  }

  public getRandomEggs(): Eggs {
    return this.eggsList[Math.floor((Math.random() * this.eggsList.length))];
  }
}
