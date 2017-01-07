import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthGuard } from './Services/authGuard';

import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { ContactUsComponent} from './contact-us/contact-us.component';
import { PostAddComponent} from './post-add/post-add.component';
import { SignUpComponent} from './sign-up/sign-up.component';
import { LoginComponent} from './login/login.component';
import { FeaturedaddsComponent} from './featuredadds/featuredadds.component';
import { CarsComponent} from './cars/cars.component';
import { MobilesComponent} from './mobiles/mobiles.component';
import { LaptopsComponent} from './laptops/laptops.component';
import {AllcategoriesComponent} from './allcategories/allcategories.component';


export const routes: Routes = [
 { path: '' , redirectTo: 'login' , pathMatch: 'full' },
 { path: 'home' , component: LoginComponent},
 { path: 'alladds' , component: HomeComponent,
canActivate:[AuthGuard]  },
{ path: 'featuredadds' , component: FeaturedaddsComponent,
canActivate:[AuthGuard]  },
 { path: 'contactus' , redirectTo: 'contact' },
 { path: 'postadd' , component: PostAddComponent,
canActivate:[AuthGuard] },
 { path: 'login' , component: LoginComponent},
 { path: 'signup' , component: SignUpComponent},
 { path: 'allcategories' , component: AllcategoriesComponent,
canActivate:[AuthGuard] },
{ path: 'allcategories/cars' , component: CarsComponent,
canActivate:[AuthGuard] },
{ path: 'allcategories/mobiles' , component: MobilesComponent,
canActivate:[AuthGuard] },
{ path: 'allcategories/laptops' , component: LaptopsComponent,
canActivate:[AuthGuard] },


 ];

export const router: ModuleWithProviders = RouterModule.forRoot(routes)
 