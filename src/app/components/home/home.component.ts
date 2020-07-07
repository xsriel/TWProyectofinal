import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
bandera:boolean;
  constructor(private dataApi:DataApiService) { }
public productos=[];
public producto='';

  ngOnInit(){
    this.bandera=true;
    this.dataApi.getAllProductos().subscribe(productos=>{
      
      console.log('productos', productos);
      this.productos=productos;
      this.bandera=false;
    })
    
  }

}
