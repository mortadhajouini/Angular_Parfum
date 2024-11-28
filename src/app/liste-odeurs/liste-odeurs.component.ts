import { Component, OnInit } from '@angular/core';
import { ParfumService } from '../services/parfum.service';
import { Odeur } from '../model/odeur.model';


@Component({
  selector: 'app-liste-odeurs',
  templateUrl: './liste-odeurs.component.html'
})
export class ListeOdeursComponent implements OnInit {

  odeurs!: Odeur[];
  updatedGen: Odeur = { "idOdeur": 0, "nomOdeur": "" };
  ajout:boolean=true;

  constructor(private parfumService: ParfumService) { }

  ngOnInit(): void {
    this.chargerOdeurs();
  }
  chargerOdeurs() {
    this.odeurs = this.parfumService.listeOdeurs();
  }
  odeurUpdated(gen: Odeur) {
    this.parfumService.ajouterOdeur(gen);
    this.chargerOdeurs();
  }

  editOdeur(gen: Odeur) {
    this.updatedGen = gen;
    this.ajout=false;
  }
}