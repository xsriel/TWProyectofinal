import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { CafesComponent } from './components/admin/cafes/cafes.component';
import { ComidaComponent } from './components/comida/comida.component';
import { TcafesComponent } from './components/tcafes/tcafes.component';
import { CcomidaComponent } from './components/ccomida/ccomida.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegistrerComponent } from './components/users/registrer/registrer.component';
import { Page404Component } from './components/page404/page404.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { HeroComponent } from './components/hero/hero.component';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {HttpClientModule} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import { LoadingComponent } from './components/loading/loading.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { CarritocomprasComponent } from './components/carritocompras/carritocompras.component';
@NgModule({
  declarations: [
    AppComponent,
    CafesComponent,
    ComidaComponent,
    TcafesComponent,
    CcomidaComponent,
    HomeComponent,
    NavbarComponent,
    ModalComponent,
    OfertasComponent,
    LoginComponent,
    RegistrerComponent,
    Page404Component,
    ProfileComponent,
    HeroComponent,
    LoadingComponent,
    BebidasComponent,
    GraficaComponent,
    CarritocomprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireStorageModule
    
  ],
  providers: [AngularFireAuth,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
