import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './components/product/product.component';
import { AppRoutingModule } from './app-routing.module';
import {ProductsService} from './Services/products.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
