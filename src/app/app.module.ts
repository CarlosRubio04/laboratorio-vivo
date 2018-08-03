import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CalendarModule } from 'angular-calendar';
import { CalendarUtilsModule } from './calendar-header/calendar-header.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';

import { HomeModule } from './home/home.module';


export const firebaseConfig = {
  apiKey: 'AIzaSyBhyIlryaecDBtRiwdgNLwI3lsx19ebpzQ',
  authDomain: 'laboratoriovivo-3d943.firebaseapp.com',
  databaseURL: 'https://laboratoriovivo-3d943.firebaseio.com',
  projectId: 'laboratoriovivo-3d943',
  storageBucket: 'laboratoriovivo-3d943.appspot.com',
  messagingSenderId: '24032935582'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CommonModule,
    CalendarModule.forRoot(),
    CalendarUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
