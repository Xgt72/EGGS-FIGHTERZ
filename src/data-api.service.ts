import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Eggs } from "./app/eggs";
import { Character } from "./app/character";

/*
export class Eggs {
  id:string;
  nom:string;
  calibre:string;
  image:string;
  power:string;
}
*/

@Injectable({
  providedIn: 'root'
})
export class DataAPIService {

  constructor(private myService: HttpClient) { }

  public getEggsArray(adress: string, eggCategorie?: string): Observable<any> {
    return this.myService.get(adress).pipe(
      map(
        (paramData: any[]) => {
          let current = null;
          let eggsList: Eggs[] = [];

          for (let i: number = 0; i < paramData.length; i++) {
            current = paramData[i];

            if (current !== 0) {
              let egg: Eggs = new Eggs();
              egg.id = current.id;
              egg.nom = current.name;
              egg.calibre = current.caliber;
              egg.image = current.image;
              egg.power = current.power;

              eggsList.push(egg);
            } else {
              console.log("error");
            }
          }

          // if eggCategorie == health or noHealth
          if (eggCategorie !== undefined) {
            if (eggCategorie == "health") {
              let newEggsList = eggsList.filter(
                (egg) => egg.power.includes("health")
              );
              eggsList = newEggsList;
            } //else {
            //   eggsList.splice();
            // }
          }

          return eggsList;
        }
      )
    )
  }

  public getCharactersArray(adress: string): Observable<any> {
    return this.myService.get(adress).pipe(
      map(
        (paramData: any[]) => {
          let current = null;
          let charactersList: Character[] = [];

          for (let i: number = 0; i < paramData.length; i++) {
            current = paramData[i];

            if (current !== 0) {
              let charac: Character = new Character();
              charac.id = current.id;
              charac.name = current.name;
              charac.gender = current.gender;
              charac.origin = current.origin;
              charac.image = current.image;
              charac.skills = current.skills;

              charactersList.push(charac);
            } else {
              console.log("error");
            }
          }
          return charactersList;
        }
      )
    )
  }
}
