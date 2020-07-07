import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { CafesInterface } from '../../models/cafes';
@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public productos: CafesInterface[];
  ngOnInit(): void {
    this.getbebidas();
    console.log('Bebidas', this.productos);
  }
  getbebidas(){

this.dataApi.getAllBebidas().subscribe(bebidas => this.productos = bebidas);
  }
}
