import { Component, OnInit, EventEmitter } from '@angular/core';
import {Product} from '../app.component';

@Component({
  selector: 'add-to-cart',
  styleUrls: ['./add-to-cart.component.css'],
  inputs:['product'],
  outputs:['onProductSelected'],
  template:
  `
  <div><button (click)="clicked(product)" class="btn btn-success">Add to cart</button></div>
  `
})
export class AddToCartComponent implements OnInit {

  product:Product[];

  currentProduct:Product;

  onProductSelected:EventEmitter<Product>;
  

  constructor() {
    this.onProductSelected=new EventEmitter();

   }

   clicked(product:Product):void
   {
     this.currentProduct=product;
     this.onProductSelected.emit(product)
   }

  ngOnInit() {
  }

}
