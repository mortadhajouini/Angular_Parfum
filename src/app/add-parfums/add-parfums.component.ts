import { Component } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';
import { Router } from '@angular/router';
import { Odeur } from '../model/odeur.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-parfums',
  templateUrl: './add-parfums.component.html'
})
export class AddParfumsComponent {

  newParfum = new Parfum();
  odeurs!: Odeur[];
  newIdOdeur!: number;
  newOdeur!: Odeur;
  myForm!: FormGroup;

  constructor(private parfumService: ParfumService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.odeurs = this.parfumService.listeOdeurs();
    this.myForm = this.formBuilder.group({
      idParfum: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nomParfum: ['', [Validators.required, Validators.minLength(5)]],
      prixParfum: ['', [Validators.required, Validators.min(0)]],
      datedeSortie: ['', [Validators.required]],
      odeur: ['', [Validators.required]]
    });
  }
  addParfum() {
    this.newOdeur = this.parfumService.consulterOdeur(this.newIdOdeur);
    this.newParfum.odeur = this.newOdeur;
    this.parfumService.ajouterParfum(this.newParfum);
    this.router.navigate(['parfums']);
  }
}