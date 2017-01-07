import { Component, OnInit, Input } from '@angular/core';
import {Adds} from '../Services/AdvertisementService'

@Component({
  selector: 'add-list',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css'],
  inputs:['adds']
})
export class AddlistComponent implements OnInit {

  adds:Adds[]
  constructor() { }

  deleteProduct(add:Adds,i):void{

    var prt=prompt("are you sure you want to delete it: (type Yes/No)");
    if(prt == 'yes')
    {
    this.adds.splice(i,1);
    }

  }

  ngOnInit() {
  }

}
