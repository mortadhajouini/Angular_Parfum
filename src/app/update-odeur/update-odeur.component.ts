import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Odeur } from '../model/odeur.model';

@Component({
  selector: 'app-update-odeur',
  templateUrl: './update-odeur.component.html'
})
export class UpdateOdeurComponent implements OnInit{

  @Input()
  odeur! : Odeur;

  @Output()
  odeurUpdated = new EventEmitter<Odeur>();

  @Input()
  ajout!:boolean;
  
  constructor() {}
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateOdeur ",this.odeur);
  }
  saveOdeur() {
    this.odeurUpdated.emit(this.odeur);
  }
}