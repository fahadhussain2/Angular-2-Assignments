import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { ContentComponent} from './content/content.component';
import { ProductsComponent} from './products/products.component';
import { ProductdetailsComponent} from './productdetails/productdetails.component';

export const routes: Routes = [
 { path: '' , redirectTo: 'home' , pathMatch: 'full' },
 { path: 'home' , component: HomeComponent },
 { path: 'about' , component: AboutComponent },
 { path: 'contact' , component: ContactComponent },
 { path: 'contactus' , redirectTo: 'contact' },
 { path: 'products' , component: ProductsComponent },
 { path: 'products/:id' , component: ProductdetailsComponent},
 ];

export const router: ModuleWithProviders = RouterModule.forRoot(routes)
 