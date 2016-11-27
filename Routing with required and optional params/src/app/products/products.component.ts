import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public selectedId;

products=[
      {"id":1 , "name":"Tshirt" , "color":"black"},
      {"id":2 , "name":"Jeans", "color":"blue"},
      {"id":3 , "name":"Sweaters", "color":"green"},
      {"id":4 , "name":"Shoes", "color":"purple"},
      {"id":5 , "name":"Caps", "color":"white"}
      ];
   

  constructor(private router:Router, private route:ActivatedRoute) {}

  onSelect(product){
    this.router.navigate(['products', product.id]);
  }
    

  ngOnInit() {

    this.route.params.subscribe((params: Params) => { 
      this.selectedId = parseInt(params[ 'id' ] )} );
  }

  isSelected(products){
    return products.id === this.selectedId;

  }

 

}
