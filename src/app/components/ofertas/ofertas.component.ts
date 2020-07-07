import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { CafesInterface } from '../../models/cafes';
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public productos: CafesInterface[];
  ngOnInit(): void {
    this.getOffers();
    console.log('OFERTAS', this.productos);
  }
  getOffers() {
    this.dataApi.getAllProductosOffers().subscribe(offers => this.productos = offers);
  }
}
