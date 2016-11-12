import { Component, OnInit } from '@angular/core';
import { Advertisement} from '../app.component';

@Component({
  selector: 'add-image',
  inputs:['adds'],
  styleUrls: ['./image.component.css'],
  template:
  `
   <div>
  <img  [src]="adds.imageUrl"  width="200" height="170">
  </div>
  `
})
export class ImageComponent implements OnInit {

  adds:Advertisement

  constructor() { }

  ngOnInit() {
  }

}
