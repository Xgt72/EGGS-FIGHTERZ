import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { DataAPIService } from "../../data-api.service";
import { Character } from "../character";

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.css']
})
export class ImagesGridComponent implements OnInit, AfterViewChecked {

  public species: string = "Human";
  public gender: string = "Female";
  // @Input() public species: string = "Human";
  // @Input() public gender: string = "Male";

  public charactersList: Character[];
  public charactersAdress: string = "http://easteregg.wildcodeschool.fr/api/characters";



  constructor(private myService: DataAPIService) {
    this.charactersList = [];

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

  }

  ngAfterViewChecked() {

    let charactersByGender = this.charactersList.filter(
      char => char.gender == this.gender
    );


    let characterBySpecies = charactersByGender.filter(
      char => char.species == this.species
    );

    this.charactersList = characterBySpecies;
  }

  public chooseYourHero(char: Character) {

  }

}
