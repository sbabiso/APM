import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './products/product.service';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent,   
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([
         { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}    
    ], { useHash : true}),
    ProductModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
