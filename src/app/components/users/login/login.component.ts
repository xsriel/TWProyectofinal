import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import Swal  from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isError:boolean;
  constructor(public auth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  public email: string = '';
  public password: string = '';
  
message1:boolean;
 
  ngOnInit(): void {
  }
  onLogin(): void {
   // console.log('email', this.email);
  //  console.log('pass', this.password);
    this.authService.loginEmailUser(this.email, this.password)
    .then((res) => {
     //this.onLoginRedirect();
   
   this.onLoginRedirect();
    }).catch((err) => {
      this.message1=true;
    }  );
    
  }
//metodo de login llevado al servicio
  onLoginGoogle(): void {
   // this.auth.signInWithPopup(new auth.GoogleAuthProvider());
   this.authService.loginGoogleUser()
   .then((res)=>{
     console.log('resUser', res);
    this.onLoginRedirect();
   }).catch(err=>
    
    console.log('err', err.message));
    
  //  console.log("google");
  }
 

  onLogout() {
    this.authService.logoutUser();
    Swal.fire('Adios vuelve pronto')

  }



  onLoginRedirect(): void {
    this.router.navigate(['/']);
  }
}
