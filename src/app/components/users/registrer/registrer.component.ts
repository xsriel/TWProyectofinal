import { Component, OnInit , ElementRef, ViewChild,Renderer2} from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, switchAll } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

import Swal  from 'sweetalert2';
///codigo para validar doble contrasena formulario reactivo 



@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {
 
  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage, private renderer:Renderer2) { }
  @ViewChild('imageUser')  inputImageUser: ElementRef;

  public email: string = '';
  public password: string = '';
  public password1: string = '';

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit(): void {
  }

  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
    
  }
 validacion(){
    if(this.password==this.password1){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Listo ahora estas registrado y logueado',
        showConfirmButton: false,
        timer: 2000
      })
     this.onAddUser()
     this.router.navigate(['admin/cafes']);
    }else{
     // alert('no son iguales');
     //alert con sweetalert2
     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La contraseñas no son iguales, intentalo de nuevo ',
     
    })
  
    }
 }
 onAddUser() {
  this.authService.registerUser(this.email, this.password)
    .then((res) => {
      this.authService.isAuth().subscribe(user => {
        if (user) {
          user.updateProfile({
            displayName: '',
            photoURL: this.inputImageUser.nativeElement.innerHTML
            
          }).then(() => {
            this.router.navigate(['admin/cafes']);
              console.log('USER UPDATED!');
              
          }).catch((error) => console.log('error', error));
        }
      });
    }).catch(err => console.log('err', err.message));
}
/*
  onAddUser(){
   
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
        
      }).catch(err => console.log('err', err.message));
  }
*/
  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLoginRedirect(): void {
    this.router.navigate(['admin/cafes']);
  }
}
