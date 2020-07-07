import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal  from 'sweetalert2';

import {UserInterface} from '../../models/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private auth: AngularFireAuth) { }
  public app_name: string ='Cafexhito';
  public isLogged: boolean = false;
  public isAdmin: any=null;
  public  userUid: string=null;
  informacion: []=[];
  datos:any={};
  
  ngOnInit() {
    this.getCurrentUser();
    this.getCurrentUseradmin();
  }
 
  getCurrentUseradmin(){
    this.authService.isAuth().subscribe(auth=>{
      if(auth){
        this.userUid=auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole=>{
          this.isAdmin=Object.assign({}, userRole.roles).hasOwnProperty('admin');
        })
      }
    })
  }
  //combrobar que se ha logueado el usuario
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log(auth.displayName);
        
       
       
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }

    });
  }
  onLogout() {
    this.auth.signOut();
    Swal.fire('Adios vuelve pronto')
  }
  
}
