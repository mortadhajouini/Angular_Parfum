import { Component } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { Odeur } from '../model/odeur.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-recherche-par-odeur',
  templateUrl: './recherche-par-odeur.component.html'
})
export class RechercheParOdeurComponent {

  parfums!: Parfum[];
  odeurs!: Odeur[];
  IdOdeur!: number;

  constructor(private parfumService: ParfumService) { }

  ngOnInit(): void {
    this.odeurs = this.parfumService.listeOdeurs();
    this.parfums = [];
  }

  onChange() {
    this.parfums = this.parfumService.rechercherParOdeur(this.IdOdeur);
  }

  supprimerParfum(g: Parfum) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.parfumService.supprimerParfum(g);
      this.parfums = this.parfumService.rechercherParOdeur(this.IdOdeur);
    }
  }
}
