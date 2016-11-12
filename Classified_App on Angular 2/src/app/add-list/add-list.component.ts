import { Component, OnInit, Input } from '@angular/core';
import { Advertisement} from '../app.component';

@Component({
  selector: 'add-list',
  styleUrls: ['./add-list.component.css'],
  inputs:['adds'],
  template:
  `
  <div>
  <add-row *ngFor="let myadds of adds; let i=index"
  [adds]="myadds" 
  [value]="i"
  (deletedAdd)="deleteProduct($event,i)">
  
  </add-row>
  </div>
  
  `
})
export class AddListComponent implements OnInit {

  adds:Advertisement[]

  constructor() { }

  deleteProduct(add:Advertisement,i):void{

    var prt=prompt("are you sure you want to delete it: (type Yes/No)");
    if(prt == 'yes')
    {
    this.adds.splice(i,1);
    }

  }

  ngOnInit() {
  }

}
