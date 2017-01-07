import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
  inputs:['price'],
})
export class PriceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
