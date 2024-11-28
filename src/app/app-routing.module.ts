import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParfumsComponent } from './parfums/parfums.component';
import { AddParfumsComponent } from './add-parfums/add-parfums.component';
import { UpdateParfumComponent } from './update-parfum/update-parfum.component';
import { RechercheParOdeurComponent } from './recherche-par-odeur/recherche-par-odeur.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ParfumGuard } from './parfum.guard';
import { ListeOdeursComponent } from './liste-odeurs/liste-odeurs.component';




const routes: Routes = [
  { path : "parfums" , component : ParfumsComponent },
  { path : "add-parfums" , component : AddParfumsComponent, canActivate:[ParfumGuard] },
  { path : "updateParfum/:id" , component : UpdateParfumComponent },
  { path : "recherche-par-odeur" , component : RechercheParOdeurComponent },
  { path : "recherche-par-nom" , component : RechercheParNomComponent },
  { path : "login" , component : LoginComponent },
  { path : "app-forbidden" , component :  ForbiddenComponent },
  { path: "liste-odeurs", component : ListeOdeursComponent },
  { path : "" , redirectTo : "parfums" , pathMatch : "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
