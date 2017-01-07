import { Component, OnInit } from '@angular/core';
import { Laptop } from '../Services/AdvertisementService';
import { AllAdds } from '../Services/AdvertisementService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css'],
  providers:[AllAdds]
})
export class LaptopsComponent implements OnInit {

  lapAds:Laptop[];
  constructor(public cars:AllAdds, private route:Router) {
    this.lapAds=this.cars.laptopAds();
  }

  navigate(){
    this.route.navigate(['allcategories']);
  }

  ngOnInit() {
  }

}
