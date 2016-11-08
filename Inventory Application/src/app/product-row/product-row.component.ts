import { Component, OnInit } from '@angular/core';
import {Product} from '../app.component';

@Component({
  selector: 'product-row',
  styleUrls: ['./product-row.component.css'],
  inputs:['product'],
  
  template:`

<hr/>
 <div class="container">


 <div class="col-sm-1"></div>
    <div class="col-sm-4 vline" >
    
   <product-image 
 [product]="product">
 </product-image>

 </div>

<div class="col-sm-5 ">
 <div>

 <div><h3>{{ product.name }}</h3></div> <br/><br/>
 <div>SKU # {{ product.sku }}</div>
 
 <div class="product-department">
 <product-department 
 [product]="product">
 </product-department>
 </div>

 </div>
</div>


<div class="col-sm-2">
<price-display 
 [price]="product.price">
 </price-display>  

<add-to-cart 
[product]="product"
(onProductSelected)="productWasSelected($event)">
</add-to-cart>

</div>


  </div>



  `
})
export class ProductRowComponent{

  product:Product;

  constructor() { }


    productWasSelected(product: Product) : void {
      alert(product.sku + " is added to cart");
    console.log( 'Product clicked: ' , product);

}

  

}
