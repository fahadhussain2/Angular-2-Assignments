import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {router} from './app.router';
import {HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthGuard } from './Services/authGuard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostAddComponent } from './post-add/post-add.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AddlistComponent } from './addlist/addlist.component';
import { AddrowComponent } from './addrow/addrow.component';
import { ImageComponent } from './image/image.component';
import { PriceComponent } from './price/price.component';
import { FeaturedaddsComponent } from './featuredadds/featuredadds.component';
import { CarsComponent } from './cars/cars.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { AllcategoriesComponent } from './allcategories/allcategories.component';
import { LogoutComponent } from './logout/logout.component';


const firebaseConfig={
    apiKey: "AIzaSyDoMTJlzqtB_v7LkDm0qtyj-9FEJ8wktcw",
    authDomain: "updated-classified-app.firebaseapp.com",
    databaseURL: "https://updated-classified-app.firebaseio.com",
    storageBucket: "updated-classified-app.appspot.com",
    messagingSenderId: "246083500210"
  };

  const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAddComponent,
    AboutComponent,
    ContactUsComponent,
    LoginComponent,
    SignUpComponent,
    MainpageComponent,
    AddlistComponent,
    AddrowComponent,
    ImageComponent,
    PriceComponent,
    FeaturedaddsComponent,
    CarsComponent,
    MobilesComponent,
    LaptopsComponent,
    AllcategoriesComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    router,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
