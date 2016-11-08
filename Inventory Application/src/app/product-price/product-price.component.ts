import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
  styleUrls: ['./product-price.component.css'],
  inputs:['price'],
  template:
  `
  <div><h2> \${{ price }}</h2></div>
  `
})
export class ProductPriceComponent{

  price:number;

  constructor() { }

 

}
