import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Params, Router} from '@angular/router';

@Component({
  selector: 'productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productinfo;
id:number;
name:string;
  constructor(private router:ActivatedRoute, private route:Router) {}

  ngOnInit() {
    this.router.params.subscribe((params: Params) => { 
      this.id = parseInt(params[ 'id' ] )} );
  }

  

  goPrevious(){
    let previousId= this.id - 1;
    this.route.navigate(['products', previousId]);
    
  }
  goNext(){
    let nextId=this.id + 1;
    this.route.navigate(['products',nextId]);
  }

  gotoProducts(){
    let selectedId=this.id? this.id:null;
    this.route.navigate(['products',{id:selectedId}]);
  }
}

