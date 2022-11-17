import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VisitsComponent } from './visits/visits.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddVisitComponent } from './visits/add-visit/add-visit.component';
import { ComponentsComponent } from './components/components.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './visits/person/person.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VisitsComponent,
    AddVisitComponent,
    ComponentsComponent,
    ButtonComponent,
    PersonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
