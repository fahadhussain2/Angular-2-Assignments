import { Component, OnInit } from '@angular/core';
import {Product} from '../app.component';

@Component({
  selector: 'product-image',
  styleUrls: ['./product-image.component.css'],
  inputs:['product'],
  template:
  `
  <div>
  <img  [src]="product.imageUrl"  width="170" height="170">
  </div>
  `
})
export class ProductImageComponent{

   product:Product;

  constructor() {
   
   }

 

}
