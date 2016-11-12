import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Advertisement} from '../app.component';

@Component({
  selector: 'add-row',
  styleUrls: ['./add-row.component.css'],
  inputs:['adds' , 'value'],
  outputs:['deletedAdd'],
  template:
  `
 <hr/>
 <div class="container">


 <div class="col-sm-1"></div>
    <div class="col-sm-4 vline">
    
   <add-image 
 [adds]="adds">
 </add-image>

 </div>

<div class="col-sm-5 ">
 <div>

 <div><h3>{{ adds.name }}</h3></div> <br/><br/>
 <div>Model # {{ adds.Modelno }}</div>
 <div>Running: {{ adds.used }}</div>
 <div>color: {{ adds.color }}</div>
 

 </div>
</div>


<div class="col-sm-2">
<price-display 
 [price]="adds.price">
 </price-display>  

<div id="delete_btn">
<button (click)="clicked(adds)" class="btn btn-success">Delete Add</button>
</div>
</div>


  </div>


  `
})
export class AddRowComponent implements OnInit {

  adds:Advertisement;

  currentAdd:Advertisement;

  deletedAdd:EventEmitter<Advertisement>



  constructor() { 
    this.deletedAdd=new EventEmitter();
  }

  clicked(adds:Advertisement):void{
    
    this.deletedAdd.emit(adds);
  }

  ngOnInit() {
  }

}
