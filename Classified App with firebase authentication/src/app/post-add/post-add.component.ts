import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import {AllAdds} from '../Services/AdvertisementService';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
  providers:[AllAdds]
})
export class PostAddComponent implements OnInit {

  alert:boolean;

  constructor(private af:AngularFire, private route:Router, public adds:AllAdds ) { }

   

  postadd(title,name,modelno,used,color,price,cat1,cat2,cat3)
  {
    
   

    if(cat1.checked == false && cat2.checked == false && cat3.checked == false  || name.value== '' || modelno.value== '' || used.value=='' || color.value=='' || price.value==''  )
    {
      
      this.alert = true;
    }

    if(cat1.checked == true && name.value !== '' && modelno.value !== '' && used.value !=='' && color.value !=='' && price.value !=='')
    {
      this.adds.newAdds('Car',name.value,modelno.value,used.value,color.value,price.value,'http://i68.tinypic.com/2nssxmq.png');
      this.adds.newCar('Car',name.value,modelno.value,used.value,color.value,price.value,'http://i68.tinypic.com/2nssxmq.png')
      this.alert= false
      cat1.checked= false;
      name.value='';
      modelno.value='';
      used.value='';
      color.value='';
      price.value='';
    }

    if(cat2.checked == true && name.value !== '' && modelno.value !== '' && used.value !=='' && color.value !=='' && price.value !=='')
    {
     this.adds.newAdds('Mobile',name.value,modelno.value,used.value,color.value,price.value,'http://i68.tinypic.com/2nssxmq.png');
     this.adds.newMobile('Mobile',name.value,modelno.value,used.value,color.value,price.value,'http://i68.tinypic.com/2nssxmq.png')
      this.alert=false;
      cat2.checked= false;
      name.value='';
      modelno.value='';
      used.value='';
      color.value='';
      price.value=''; 
    }

    if(cat3.checked == true && name.value !== '' && modelno.value !== '' && used.value !=='' && color.value !=='' && price.value !=='')
    {
     this.adds.newAdds('Laptop',name.value,modelno.value,used.value,color.value,price.value,'http://i68.tinypic.com/2nssxmq.png');
     this.adds.newLaptop('Laptop',name.value,modelno.value,used.value,color.value,price.value,'http://i68.tinypic.com/2nssxmq.png')
      this.alert=false;
      cat3.checked= false;
      name.value='';
      modelno.value='';
      used.value='';
      color.value='';
      price.value=''; 
    }
    

  
}

  ngOnInit() {
  }

}
