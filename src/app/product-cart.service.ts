import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {product} from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  private _productList:product[]=[];
  productList:BehaviorSubject<product[]>=new BehaviorSubject(this._productList);

  addToCart(product:product){
    let item:product|undefined=this._productList.find((v1) => v1.nombre == product.nombre)
    if (!item) {
      this._productList.push({... product});
    } else {
      item.quantity += product.quantity;
    }
    console.log(this._productList);
    this.productList.next(this._productList); //emite evento
  }
  
  constructor() { }
}
