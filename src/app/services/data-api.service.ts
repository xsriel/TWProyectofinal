import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {CafesInterface} from '../models/cafes';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs:AngularFirestore) { 
   
  }
private productosCollection:AngularFirestoreCollection<CafesInterface>;
private productos: Observable<CafesInterface[]>;
private productoDoc: AngularFirestoreDocument<CafesInterface>;
private producto: Observable<CafesInterface>;
public selectedproducto: CafesInterface={id: null};



//funciones
  getAllProductos(){
    this.productosCollection=this.afs.collection<CafesInterface>('productos'); 
    return this.productos =this.productosCollection.snapshotChanges().pipe(map(changes=>{//sirve para mapear la el resultado que regrese
      return changes.map(action=>{
        const data= action.payload.doc.data(  ) as CafesInterface;
        data.id=action.payload.doc.id;
        return data;
      });
    }));
  }
  getAllProductosOffers() {
    this.productosCollection = this.afs.collection('productos', ref => ref.where('oferta', '==', '1'));
    return this.productos = this.productosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as CafesInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
getAllBebidas(){
  this.productosCollection = this.afs.collection('productos', ref => ref.where('tipo', '==', 'bebida'));
  return this.productos = this.productosCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as CafesInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
}
getAllProductosComida(){
  this.productosCollection = this.afs.collection('productos', ref => ref.where('tipo', '==', 'comida'));
  return this.productos = this.productosCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as CafesInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
}

  unproducto(idproducto: string){
    this.productoDoc=this.afs.doc<CafesInterface>(`productos/${idproducto}`);
    return this.producto=this.productoDoc.snapshotChanges().pipe(map(action=>{//para modificar y solo obtener cosas especificas
      if(action.payload.exists==false){
        return null;
      }else{
        const data=action.payload.data() as CafesInterface;
        data.id=action.payload.id;
        return data;
      }
    }));
  }
  addProducto(producto:CafesInterface): void {
    this.productosCollection.add(producto);
  }
  updateProducto(producto: CafesInterface): void {
    let idproducto=producto.id;
    this.productoDoc=this.afs.doc<CafesInterface>(`productos/${idproducto}`);
    this.productoDoc.update(producto);
  }
  deleteProducto(idproducto:string):void{
    this.productoDoc=this.afs.doc<CafesInterface>(`productos/${idproducto}`);
this.productoDoc.delete();
  }
}
