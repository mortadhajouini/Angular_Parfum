import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParfumsComponent } from './parfums/parfums.component';
import { AddParfumsComponent } from './add-parfums/add-parfums.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateParfumComponent } from './update-parfum/update-parfum.component';
import { RechercheParOdeurComponent } from './recherche-par-odeur/recherche-par-odeur.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeOdeursComponent } from './liste-odeurs/liste-odeurs.component';
import { UpdateOdeurComponent } from './update-odeur/update-odeur.component';

@NgModule({
  declarations: [
    AppComponent,
    ParfumsComponent,
    AddParfumsComponent,
    UpdateParfumComponent,
    RechercheParOdeurComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent,
    ListeOdeursComponent,
    UpdateOdeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
