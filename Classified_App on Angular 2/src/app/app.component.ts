import { Component } from '@angular/core';

@Component({
  selector: 'classified-app',
  styleUrls: ['./app.component.css'],
  template:
  `
  <h2>{{main_title}}</h2>


  <div class="container">
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">All Products</a></li>
    <li><a data-toggle="tab" href="#menu1">Post Add</a></li>
    <li><a data-toggle="tab" href="#menu2">About Us </a></li>
    <li><a data-toggle="tab" href="#menu3">Contact Us</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>All Adds</h3>

<div>
  <add-list
  [adds]="Adds">
  </add-list>
  </div>

    </div>

    
    <div id="menu1" class="tab-pane fade">
      
     <div class="container">
  <h3>Submit an Ad</h3>
  <form class="form-horizontal">
    <div class="form-group">
    <div class="col-sm-1"></div>
      <label class="control-label col-sm-2">Product Title:</label>
      <div class="col-sm-6">
        <input class="form-control" id="email"  placeholder="Enter Product title: Car, Laptop, Mobile" #title>
      </div>
    </div>

    <div class="form-group">
    <div class="col-sm-1"></div>
      <label class="control-label col-sm-2">Product Name:</label>
      <div class="col-sm-6">
        <input class="form-control" id="email"  placeholder="Enter Product name" #name>
      </div>
    </div>

    <div class="form-group">
    <div class="col-sm-1"></div>
      <label class="control-label col-sm-2">Product Model #</label>
      <div class="col-sm-6">
        <input class="form-control" id="email"  placeholder="Enter Product Model #" #modelno>
      </div>
    </div>

    <div class="form-group">
    <div class="col-sm-1"></div>
      <label class="control-label col-sm-2">Product used:</label>
      <div class="col-sm-6">
        <input class="form-control" id="email"  placeholder="Product used" #used>
      </div>
    </div>

    <div class="form-group">
    <div class="col-sm-1"></div>
      <label class="control-label col-sm-2">Color:</label>
      <div class="col-sm-6">
        <input class="form-control" id="email"  placeholder="Enter Color" #color>
      </div>
    </div>

    <div class="form-group">
    <div class="col-sm-1"></div>
      <label class="control-label col-sm-2">Price:</label>
      <div class="col-sm-6">
        <input class="form-control" id="email"  placeholder="Enter Price" #price>
      </div>
    </div>


    
    <div class="form-group">
    <div class="col-sm-1"></div>
      <div class="col-sm-offset-2 col-sm-6">
        <button (click)="postadd(title,name,modelno,used,color,price)" class="btn btn-default btn-success">Post Add</button>
      </div>
    </div>
  </form>
</div>


    </div>

    
    <div id="menu2" class="tab-pane fade">
    <h3>About Us</h3>
      </div>


    <div id="menu3" class="tab-pane fade">
      <h3>Contact Us</h3>
      
    </div>
  </div>
</div>

  
  `
})
export class AppComponent {
  main_title = 'Classified Application';

  Adds:Advertisement[];

  constructor(){

    this.Adds=[new Advertisement(
      'Car',
      'Toyota Corolla',
      '2016',
      '15000km',
      'black',
      2500000,
      'http://i66.tinypic.com/25smkq1.png'),

      new Advertisement(
      'Mobile',
      'Samsung Galaxy',
      'Note 7',
      '4 months',
      'white',
      40000,
      'http://i64.tinypic.com/24y4ak5.png'),

      new Advertisement(
      'Laptop',
      'Apple macbook 13',
      'TX-1150',
      '8 months',
      'grey',
      80000,
      'http://i64.tinypic.com/2yplt1s.png')
      ]
  }

  postadd(title,name,modelno,used,color,price)
  {
    
    

    if(title.value== '' || name.value== '' || modelno.value== '' || used.value=='' || color.value=='' || price.value==''  )
    {
      alert("please fill all the fields");
    }
    else
    {
      this.Adds.push(new Advertisement(title.value, name.value, modelno.value, used.value, color.value, price.value,'http://i68.tinypic.com/2nssxmq.png'));
      alert("your product has been posetd successfully");
      title.value='';
      name.value='';
      modelno.value='';
      used.value='';
      color.value='';
      price.value='';
    }
  
}

}


export class Advertisement{

  constructor(
    public title:string,
    public name:string,
    public Modelno:string,
    public used:string,
    public color:string,
    public price:number,
    public imageUrl:string
  )

  {

  }

  

}

