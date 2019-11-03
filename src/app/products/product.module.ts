import { NgModule } from '@angular/core';
import { productListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacePipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StarComponent } from '../shared/star.component';

@NgModule({
  declarations: [
    productListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe
  ],
  imports: [
    RouterModule,
    RouterModule.forChild([
      { path: 'products', component: productListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], 
           component: ProductDetailComponent } 
  
    ]),
    SharedModule
  ]
})
export class ProductModule { }
