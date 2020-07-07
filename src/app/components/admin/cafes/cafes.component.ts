import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import {CafesInterface} from '../../../models/cafes';
import {NgForm} from '@angular/forms';
import Swal  from 'sweetalert2';
import {AuthService} from '../../../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserInterface} from '../../../models/user';
@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  public productos: CafesInterface[];
  public isAdmin: any=null;
  public  userUid: string=null;



  ngOnInit(): void {
    this.getAllproductos();
    this.getCurrentUseradmin();
  }
  //con este metodo se comprueba si el usuario es admin 
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
getAllproductos(){
  this.dataApi.getAllProductos().subscribe(productos=>{
    this.productos=productos;
  });
}
onDeleteProducto(idProducto:string){
  console.log('DELETE PRODUCTO', idProducto);
  Swal.fire({
    title: 'Estas seguro(a)?',
    text: "Puedes cambiar de opinion!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminarlo!'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Eliminado!',
        'El producto ha sido eliminado.',
        'success',
      )
      this.dataApi.deleteProducto(idProducto)
    }
  })
 // this.dataApi.deleteProducto(idProducto)
}


onPreUpdateProducto(producto: CafesInterface) {
  console.log('PRODUCTO', producto);
  this.dataApi.selectedproducto = Object.assign({}, producto);
}


}
