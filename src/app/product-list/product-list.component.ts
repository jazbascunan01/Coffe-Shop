import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import{product} from './product';
import { InputIntegerComponent } from '../input-integer/input-integer.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor(private cart: ProductCartService,
    private productDataService: ProductDataService
  ) { }
  addToCart(product:product):void{
    this.cart.addToCart(product);
    product.stock-=product.quantity;
    product.quantity=0;
  }
  maxReached($event:number){
    alert("Se alcanzó el límite");
  }
  products: product[]=[];
  ngOnInit(): void {
    this.productDataService
      .getAll()
      .subscribe((products) => (this.products = products));
  }
}
