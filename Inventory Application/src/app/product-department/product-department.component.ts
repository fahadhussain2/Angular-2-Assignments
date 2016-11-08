import { Component, OnInit } from '@angular/core';
import {Product} from '../app.component';

@Component({
  selector: 'product-department',
  styleUrls: ['./product-department.component.css'],
  inputs:['product'],
  template:
  `
 <div>
 <span *ngFor="let name of product.department; let i=index">
 <a href="#">{{ name }}</a>
 <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
 </span>
 </div>
  `
})
export class ProductDepartmentComponent {

  product:Product;

  constructor() { }



}
