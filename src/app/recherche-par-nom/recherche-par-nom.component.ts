import { Component } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { Odeur } from '../model/odeur.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent {

  parfums!: Parfum[];
  odeurs!: Odeur[];
  IdOdeur!: number;
  allParfums!: Parfum[];
  searchTerm!: string;

  constructor(private parfumService: ParfumService) { }

  ngOnInit(): void {
    this.parfums = this.parfumService.listeParfum();
  }

  supprimerParfum(g: Parfum) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.parfumService.supprimerParfum(g);
      this.parfums = this.parfumService.rechercherParOdeur(this.IdOdeur);
    }
  }
}
