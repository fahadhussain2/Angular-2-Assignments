import {Injectable} from '@angular/core';

export class Adds{
    title:string;
    name:string;
    Modelno:string;
    used:string;
    color:string;
    price:number;
    imageUrl:string

    constructor(title:string, name:string, modelno:string, used:string, color:string, price:number, imageUrl:string){
        this.title=title;
        this.name=name;
        this.Modelno=modelno;
        this.used=used;
        this.color=color;
        this.price=price;
        this.imageUrl=imageUrl;
    }
}

@Injectable()

export class Car extends Adds{

    constructor(title:string, name:string, modelno:string, used:string, color:string, price:number, imageUrl:string){
        super(title,name,modelno,used,color,price,imageUrl)
    }
}

export class Mobile extends Adds{

    constructor(title:string, name:string, modelno:string, used:string, color:string, price:number, imageUrl:string){
        super(title,name,modelno,used,color,price,imageUrl)
    }
}

export class Laptop extends Adds{

    constructor(title:string, name:string, modelno:string, used:string, color:string, price:number, imageUrl:string){
        super(title,name,modelno,used,color,price,imageUrl)
    }
}

@Injectable()

export class AllAdds{
    car_adds:Car[]=[
        new Car('Car','Toyota Corolla','2016','15000km', 'black',2500000,'http://i66.tinypic.com/25smkq1.png'),
        
        
        ]
    
    mobile_adds:Mobile[]=[
       new Mobile('Mobile','Samsung Galaxy','Note 7','4 months','white',40000,'http://i64.tinypic.com/24y4ak5.png'),
       
    ]

    laptop_adds:Laptop[]=[
        new Laptop('Laptop','Apple macbook 13','TX-1150','8 months','grey',80000,'http://i64.tinypic.com/2yplt1s.png'),
        
    ]

    all_adds:Adds[]=[ 
        new Adds('Car','Toyota Corolla','2016','15000km', 'black',2500000,'http://i66.tinypic.com/25smkq1.png'),
        new Adds('Mobile','Samsung Galaxy','Note 7','4 months','white',40000,'http://i64.tinypic.com/24y4ak5.png'),
        new Adds('Laptop','Apple macbook 13','TX-1150','8 months','grey',80000,'http://i64.tinypic.com/2yplt1s.png')
    ]

    newCar(title:string, name:string, modelno:string, used:string, color:string, price:number, imageUrl:string){
        this.car_adds.push(new Car(title,name,modelno,used,color,price,imageUrl));
        localStorage.setItem("cars", JSON.stringify(this.car_adds));
        
    }
    
    newMobile(title:string, name:string, modelno:string, used:string, color:string, price:number, imageUrl:string){
        this.mobile_adds.push(new Mobile(title,name,modelno,used,color,price,imageUrl));
        localStorage.setItem("mobiles",JSON.stringify(this.mobile_adds));
    }

    newLaptop(title:string, name:string, modelno:string, used:string, color:string, price:number, imageUrl:string){
        this.laptop_adds.push(new Laptop(title,name,modelno,used,color,price,imageUrl));
        localStorage.setItem("laptops",JSON.stringify(this.laptop_adds));
        
    }

    newAdds(title:string, name:string, modelno:string, used:string, color:string, price:number, imageUrl:string){
        this.all_adds.push(new Adds(title,name,modelno,used,color,price,imageUrl));
        localStorage.setItem("alladds",JSON.stringify(this.all_adds));
    }

    showAdds():any[]{
        
        
        let ads=JSON.parse(localStorage.getItem("alladds"));            //all adds from local storage
        return ads;   
    }

    featuredAdds(){
        let length= this.all_adds.length;
        let featured_adds:any[]=[this.all_adds[length-1] , this.all_adds[length-2] , this.all_adds[length-3]];  // most recent adds
        return featured_adds;
    }

    carAds():any[]{
        let car_ads=JSON.parse(localStorage.getItem("cars"));
        return car_ads;
    }

    mobileAds():any[]{
        let mob_ads=JSON.parse(localStorage.getItem("mobiles"));
        return mob_ads
    }

    laptopAds():any[]{
        let lap_ads=JSON.parse(localStorage.getItem("laptops"));
        return lap_ads
    }

    

    constructor(){
        if(localStorage.getItem("alladds") === null )
        {
        localStorage.setItem("alladds",JSON.stringify(this.all_adds));
        localStorage.setItem("cars",JSON.stringify(this.car_adds));
        localStorage.setItem("mobiles",JSON.stringify(this.mobile_adds));
        localStorage.setItem("laptops",JSON.stringify(this.laptop_adds));
    }
        
        else{
            this.all_adds=JSON.parse(localStorage.getItem("alladds"));
            this.car_adds=JSON.parse(localStorage.getItem("cars"));
            this.mobile_adds=JSON.parse(localStorage.getItem("mobiles"));
            this.laptop_adds=JSON.parse(localStorage.getItem("laptops"));
        }
        
        
        
        // console.log(this.veh_ad_arr);
        }
    }

    

      

