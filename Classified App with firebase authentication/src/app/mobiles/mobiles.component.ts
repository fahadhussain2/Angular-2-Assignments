import { Component, OnInit } from '@angular/core';
import { Mobile } from '../Services/AdvertisementService';
import { AllAdds } from '../Services/AdvertisementService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css'],
  providers:[AllAdds]
})
export class MobilesComponent implements OnInit {

  mobAds:Mobile[];
  constructor(public cars:AllAdds, private route:Router) {
    this.mobAds=this.cars.mobileAds();
  }

  navigate(){
    this.route.navigate(['allcategories']);
  }

  ngOnInit() {
  }

}
