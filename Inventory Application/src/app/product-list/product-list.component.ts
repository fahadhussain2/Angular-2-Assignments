import { Component, OnInit, Input , EventEmitter , Output} from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'product-list',
  styleUrls: ['./product-list.component.css'],
  inputs:['productlist'],
  
  template:`
  <div >
  
 <product-row *ngFor="let myProduct of productlist"
    [product]="myProduct">
    </product-row>

  </div>
  `
})
export class ProductListComponent{

  productlist:Product[];

  
  constructor() {

    
  
   }


 

  }
