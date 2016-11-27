import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  styleUrls: ['./about.component.css'],
  template:
  `
   <div>
   <h1>This is About</h1> 
 </div>

  `
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
