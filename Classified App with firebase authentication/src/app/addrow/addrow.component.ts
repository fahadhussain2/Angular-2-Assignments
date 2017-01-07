import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Adds} from '../Services/AdvertisementService';

@Component({
  selector: 'add-row',
  templateUrl: './addrow.component.html',
  styleUrls: ['./addrow.component.css'],
  inputs:['adds' , 'value'],
  outputs:['deletedAdd']
})
export class AddrowComponent implements OnInit {

  adds:Adds ;

  currentAdd:Adds;

  deletedAdd:EventEmitter<any>

  constructor() { 
    this.deletedAdd=new EventEmitter();
  }

  clicked(adds:Adds):void{
    
    this.deletedAdd.emit(adds);
  }

  ngOnInit() {
  }

}
