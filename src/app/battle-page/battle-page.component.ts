import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Character } from "../character";
import { Eggs } from "../eggs";
import { choosenHero } from "../hero";
import { choosenOpponent } from "../opponent";
import { RandomCharacterComponent } from "../random-character/random-character.component";
import { RandomEggsComponent } from "../random-eggs/random-eggs.component";

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
  public hero: Character = choosenHero;
  public opponent: Character = choosenOpponent;
  public randomCharacter: RandomCharacterComponent;
  public randomEgg: RandomEggsComponent;

  constructor() { 
    this.musicIndex = 2;
    this.heroHealth = 50;
    this.opponentHealth = 50;
  }
  
  ngOnInit() {
    
  }

  ngAfterViewChecked() {
    // this.battleMusic = "../../assets/Musics Street/" + this.battleMusics[this.musicIndex];
    // console.log(this.battleMusic);
  }

  public nextTurn(char: Character) {
    this.hero = char;
    this.randomCharacter.


  }
}
