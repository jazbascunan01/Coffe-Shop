import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../product-list/product';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
 productList:Observable<product[]>;
 constructor(private cart:ProductCartService){
  this.productList=cart.productList.asObservable();
 };
}
