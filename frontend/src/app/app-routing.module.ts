import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import{ HomePageComponent}from './home-page/home-page.component';
import{ViewDestinationComponent }from './view-destination/view-destination.component'
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewDubaiComponent } from './view-dubai/view-dubai.component';
import { ViewAustraliaComponent } from './view-australia/view-australia.component';
import { ViewSouthafricaComponent } from './view-southafrica/view-southafrica.component';
import { ViewSwitzerlandComponent } from './view-switzerland/view-switzerland.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path:'register', component: RegisterComponent},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view', component: ViewDestinationComponent },
  { path:'view-dubai', component: ViewDubaiComponent},
  { path:'view-australia', component: ViewAustraliaComponent },
  { path:'view-switzerland', component: ViewSwitzerlandComponent },
  { path:'view-southafrica', component: ViewSouthafricaComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
