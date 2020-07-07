import { Component, OnInit } from '@angular/core';
import{DataApiService} from '../../services/data-api.service';
import {CafesInterface} from '../../models/cafes';
import { ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-ccomida',
  templateUrl: './ccomida.component.html',
  styleUrls: ['./ccomida.component.css']
})
export class CcomidaComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
public producto: CafesInterface={};
  ngOnInit() {
    const idProducto= this.route.snapshot.params['id'];
    this.unproducto(idProducto);
  }
unproducto(idProducto: string):void{
  this.dataApi.unproducto(idProducto).subscribe(producto=>{
    console.log('Producto', producto);
    this.producto=producto;
  })

}
}
