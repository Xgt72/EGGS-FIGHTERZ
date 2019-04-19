import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { DataAPIService } from "../../data-api.service";
import { Character } from "../character";
import { specieGender } from "../speciesAndGender";
import { Router } from '@angular/router';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.css']
})
export class ImagesGridComponent implements OnInit, AfterViewChecked {

  // public species: string;
  // public gender: string;
  public species: string = "Human";
  public gender: string = "Male";

  public charactersList: Character[];
  public charactersAdress: string = "http://easteregg.wildcodeschool.fr/api/characters";



  constructor(private myService: DataAPIService, private _router:Router ) {
    this.charactersList = [];
    this.species = "Human";
    this.gender = "Male";
 

    this.myService.getCharactersArray(this.charactersAdress).subscribe(
      (paramChar: Character[]) => {
        this.charactersList = paramChar;
      }
    );
  }


  ngOnInit() {
    // this.myService.getCharactersArray(this.charactersAdress).subscribe(
    //   (paramChar: Character[]) => {
    //     this.charactersList = paramChar;
    //   }
    // );
    // console.log("2");    
    this.species = "Human";
    this.gender = "Female";


  }

  ngAfterViewChecked() {
    // this.gender = specieGender.gender;
    // this.species = specieGender.specie;
    // console.log(this.gender);
    // console.log(this.species);

    let charactersByGender = this.charactersList.filter(
      char => char.gender == this.gender
    );


    let characterBySpecies = charactersByGender.filter(
      char => char.species == this.species
    );

    this.charactersList = characterBySpecies;
  }

  public chooseYourHero(char: Character) {
    this._router.navigate(["/battle-page"]);
  }

}
