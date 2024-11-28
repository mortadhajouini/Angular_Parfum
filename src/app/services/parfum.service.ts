import { Injectable } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { Odeur } from '../model/odeur.model';

@Injectable({
  providedIn: 'root'
})
export class ParfumService {
  parfums: Parfum[];
  odeurs: Odeur[];
  parfumsRecherche!: Parfum[];

  constructor() {

    this.odeurs = [
      { idOdeur: 1, nomOdeur: "RPG" },
      { idOdeur: 2, nomOdeur: "Fighting" },
      { idOdeur: 3, nomOdeur: "Action" }
    ];
    this.parfums = [
      { idParfum: 1, nomParfum: "Elden Ring", prixParfum: 39.99, datedeSortie: new Date("06/24/2022"), odeur: { idOdeur: 1, nomOdeur: "RPG" }, email: "customerservice@bntca.com", enable: false },
      { idParfum: 2, nomParfum: "Tekken 7", prixParfum: 24.99, datedeSortie: new Date("01/01/2017"), odeur: { idOdeur: 2, nomOdeur: "Fighting" }, email: "customerservice@bntca.com", enable: false },
      { idParfum: 3, nomParfum: "Far Cry 3", prixParfum: 15.99, datedeSortie: new Date("11/29/2012"), odeur: { idOdeur: 3, nomOdeur: "Action" }, email: "farcrybanduk@gmail.com", enable: false }
    ];
  }

  listeParfum(): Parfum[] {
    return this.parfums;
  }

  ajouterParfum(g: Parfum) {
    this.parfums.push(g);
  }

  supprimerParfum(g: Parfum) {
    const index = this.parfums.indexOf(g, 0);
    if (index > -1) {
      this.parfums.splice(index, 1);
    }
  }

  consulterParfum(id: number): Parfum {
    return this.parfums.find(g => g.idParfum == id)!;
  }

  trierParfums() {
    this.parfums = this.parfums.sort((n1, n2) => {
      if (n1.idParfum! > n2.idParfum!) {
        return 1;
      }
      if (n1.idParfum! < n2.idParfum!) {
        return -1;
      }
      return 0;
    });
  }

  updateParfum(g: Parfum) {
    this.supprimerParfum(g);
    this.ajouterParfum(g);
    this.trierParfums();
  }

  listeOdeurs(): Odeur[] {
    return this.odeurs;
  }

  consulterOdeur(id: number): Odeur {
    return this.odeurs.find(odeur => odeur.idOdeur == id)!;
  }

  rechercherParOdeur(idOdeur: number): Parfum[] {
    this.parfumsRecherche = [];

    this.parfums.forEach((cur, index) => {
      if (idOdeur == cur.odeur.idOdeur) {
        console.log("cur " + cur);
        this.parfumsRecherche.push(cur);
      }
    });

    return this.parfumsRecherche;
  }

  ajouterOdeur(g: Odeur) {
    this.odeurs.push(g);
    console.log(this.odeurs);
  }
}
