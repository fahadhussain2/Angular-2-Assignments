import { Component, OnInit } from '@angular/core';
import {AllAdds} from '../Services/AdvertisementService';
import {Adds} from '../Services/AdvertisementService';

@Component({
  selector: 'app-featuredadds',
  templateUrl: './featuredadds.component.html',
  styleUrls: ['./featuredadds.component.css'],
  providers:[AllAdds]
})
export class FeaturedaddsComponent implements OnInit {

Adds:Adds[]
  constructor(public fa:AllAdds) {
    this.Adds=this.fa.featuredAdds();
  }

  ngOnInit() {
  }

}
