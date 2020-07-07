import { Component, OnInit,  ViewChild, ElementRef, Input } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import {CafesInterface} from '../../models/cafes';
import {NgForm} from '@angular/forms';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() userUid: string;
  constructor(public dataApi: DataApiService) { }
@ViewChild('btnClose' ) btnClose: ElementRef;
  ngOnInit(): void {
  }
  onSaveProducto(productoForm: NgForm): void{

    if(productoForm.value.id==null){
      //agregar nuevo
      this.dataApi.addProducto(productoForm.value);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Listo se ha agregado el producto',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      //modificar
      this.dataApi.updateProducto(productoForm.value);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Listo se ha modificado el producto',
        showConfirmButton: false,
        timer: 1500
      })

    }
 productoForm.resetForm();
 this.btnClose.nativeElement.click();
 
  }
}
