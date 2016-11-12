import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { AddRowComponent } from './add-row/add-row.component';
import { ImageComponent } from './image/image.component';
import { PriceComponent } from './price/price.component';


@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    AddRowComponent,
    ImageComponent,
    PriceComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
