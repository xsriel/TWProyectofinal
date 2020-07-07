import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { CafesInterface } from '../../models/cafes';
@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public productos: CafesInterface[];
  ngOnInit(): void {
    this.getComida();
    console.log('Comida', this.productos);
  }
  getComida(){
    this.dataApi.getAllProductosComida().subscribe(comidas => this.productos = comidas);
  }
  }

