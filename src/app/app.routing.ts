import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { routeOne } from './route-one/route-one.component';
import { routeTow } from './route-tow/route-tow.component';
import { routeThree } from './route-three/route-three.component';
import { routeFour } from './route-four/route-four.component';
import { LoginComponent } from './login/login.component';
import { SinginComponent } from './singin/singin.component';
import { ProfileComponent } from './profile/profile.component';
import { CompleteComponent } from './complete/complete.component';


import { MyGuard } from './services/my-guard.service.guard';

//import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'contacto',         component: ContactoComponent },
    { path: 'gracias',          component: HomeComponent },
    { path: 'ruta-uno',         component: routeOne },
    { path: 'ruta-dos',         component: routeTow },
    { path: 'ruta-tres',        component: routeThree },
    { path: 'ruta-cuatro',      component: routeFour },
    { path: 'login',            component: LoginComponent },
    { path: 'singin',           component: SinginComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [MyGuard] },
    { path: 'complete', component: CompleteComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
