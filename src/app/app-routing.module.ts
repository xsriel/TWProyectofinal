import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {OfertasComponent} from './components/ofertas/ofertas.component';
import {BebidasComponent} from './components/bebidas/bebidas.component';
import {ComidaComponent} from './components/comida/comida.component';
import { CcomidaComponent } from './components/ccomida/ccomida.component';
import { CafesComponent } from './components/admin/cafes/cafes.component';

import { LoginComponent } from 'src/app/components/users/login/login.component';
import { RegistrerComponent } from './components/users/registrer/registrer.component';
import { ProfileComponent } from 'src/app/components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {path: 'offers', component:OfertasComponent, canActivate:[AuthGuard]},// solo para garantizar que usuarios auth
  {path: 'bebidas', component:BebidasComponent, canActivate:[AuthGuard]},// solo para garantizar que usuarios auth
  {path: 'comida', component:ComidaComponent, canActivate:[AuthGuard]},// solo para garantizar que usuarios auth
  {path: 'producto/:id', component:CcomidaComponent},
  {path: 'admin/cafes', component:CafesComponent,canActivate:[AuthGuard]},//depsues solo para garantizar que usuarios auth
 // {path: 'admin/comida', component:ComidaComponent},//depsues solo para garantizar que usuarios auth
  {path: 'users/login', component:LoginComponent},
  {path: 'users/registrer', component:RegistrerComponent},
  {path: 'users/profile', component: ProfileComponent,canActivate:[AuthGuard]},//depsues solo para garantizar que usuarios auth
  
  {path: '**', component:Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
