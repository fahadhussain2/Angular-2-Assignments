import { Component, OnInit } from '@angular/core';
import { Car } from '../Services/AdvertisementService';
import { AllAdds } from '../Services/AdvertisementService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers:[AllAdds]
})
export class CarsComponent implements OnInit {

  carAds:Car[];
  constructor(public cars:AllAdds, private route:Router) {
    this.carAds=this.cars.carAds();
  }

  navigate(){
    this.route.navigate(['allcategories']);
  }

  ngOnInit() {
  }

}
