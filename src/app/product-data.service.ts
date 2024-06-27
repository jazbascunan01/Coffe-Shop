import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './product-list/product';
import { Observable, tap } from 'rxjs';

const URL='https://6678a2a30bd45250561f5439.mockapi.io/api/v1/products/products';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<product[]>{
    // fetch('url', {method: 'GET'})
    return this.http.get<product[]>(URL)
      .pipe(
        tap((products:product[])=>products.forEach(product=>product.quantity))
      );
  }
}
