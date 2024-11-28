import { Component } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ParfumService } from '../services/parfum.service';
import { Odeur } from '../model/odeur.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-parfum',
  templateUrl: './update-parfum.component.html'
})
export class UpdateParfumComponent {

  currentParfum = new Parfum();
  odeurs!: Odeur[];
  updatedOdeurId!: number;
  myForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private parfumService: ParfumService,
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

    this.currentParfum = this.parfumService.consulterParfum(this.activatedRoute.snapshot.params['id']);
    this.updatedOdeurId = this.currentParfum.odeur.idOdeur;
  }
  updateParfum() {
    this.currentParfum.odeur = this.parfumService.consulterOdeur(this.updatedOdeurId);
    this.parfumService.updateParfum(this.currentParfum);
    this.router.navigate(['parfums']);
  }
}