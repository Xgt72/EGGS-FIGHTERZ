import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { DataAPIService } from "../../data-api.service";
import { Character } from "../character";

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.css']
})
export class ImagesGridComponent implements OnInit, AfterViewChecked {

  public species: string = "Alien";
  public gender: string = "Male";
  // @Input() public species: string = "Human";
  // @Input() public gender: string = "Male";

  public charactersList: Character[];
  public charactersAdress: string = "http://easteregg.wildcodeschool.fr/api/characters";
  // public characterBySpecies: Character[];
  // public charactersByGender: Character[];


  constructor(private myService: DataAPIService) {
    this.charactersList = [];
    console.log("1");

    this.myService.getCharactersArray(this.charactersAdress).subscribe(
      (paramChar: Character[]) => {
        this.charactersList = paramChar;
      }
    );
    console.log("2");
    console.log(this.charactersList);
    // this.characterBySpecies = [];
    // this.charactersByGender = [];
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
    console.log(this.charactersList);
    console.log("4");
    let charactersByGender = this.charactersList.filter(
      char => char.gender == this.gender
    );


    let characterBySpecies = charactersByGender.filter(
      char => char.species == this.species
    );

    this.charactersList = characterBySpecies;
  }

}
