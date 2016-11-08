import { Component } from '@angular/core';


@Component({
  selector: 'inventory-app',
  styleUrls: ['./app.component.css'],
  template: 
  `
<header></header>
<br/>
  <div class="container">
  
  

  <product-list 
  [productlist]="product">

  </product-list>
  </div>
  `
})
export class AppComponent {

  product:Product[];  

  constructor(){

    this.product= [new Product(
     'T-SHIRT' ,
     'A nice blue T-shirt',
     'http://i68.tinypic.com/2j5euqf.png',
     ['Men','Accessories','t-shirt'],
     30),

     new Product(
     'NEATOJACKET' ,
     'Grey Jacket' ,
     'http://i63.tinypic.com/x6bpk3.png' ,
     [ 'Men' , 'Apparel' , 'Jackets & Vests' ],
     238.99),

     new Product(
     'Black Hat' ,
     'A nice black hat' ,
     'http://s.pictub.club/2016/11/08/HkVGM.jpg' ,
     [ 'Men' , 'glasses' , 'Rayban glasses' ],
     109.99),

     

      new Product(
     'Black Running Shoes' ,
     'My Shoes' ,
     'http://s.pictub.club/2016/11/08/HkUo5.jpg' ,
     [ 'Men' , 'Shoes' , 'Running Shoes' ],
     238.99)
     ]
  }



}


export class Product{

 

  constructor(
    public sku:string,
    public name:string,
    public imageUrl:string,
    public department:string[],
    public price:number){



  }

}


