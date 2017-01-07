import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  inputs:['adds']
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
