import { Component, OnInit } from '@angular/core';
import {AllAdds} from '../Services/AdvertisementService';
import {Adds} from '../Services/AdvertisementService';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AllAdds]
})
export class HomeComponent implements OnInit {

  Adds:Adds[];
  constructor(public aa:AllAdds, private af:AngularFire, private route:Router){
    this.Adds=this.aa.showAdds();
  }

  logOut() {
    this.af.auth.logout();
    alert("you are logged out! please sign in again");
    this.route.navigate(['home']); //navigate back to home page
    
  }

  ngOnInit() {
  }

}
