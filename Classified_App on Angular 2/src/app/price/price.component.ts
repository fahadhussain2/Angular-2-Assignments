import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  styleUrls: ['./price.component.css'],
  inputs:['price'],
  template:
  `
  <div><h3> Rs {{ price }}</h3></div>
  
  `
})
export class PriceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
