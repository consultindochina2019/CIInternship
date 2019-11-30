import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { ShoppingComponent } from './shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent
    
  ],
  imports: [
    BrowserModule,NgxPaginationModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
