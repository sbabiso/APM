import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class productListComponent implements OnInit {
pageTitle: string = 'Product List By Sam';
imageWidth: number = 40;
imageMargin: number = 2;
showImage: boolean = false;
errorMessage: string;

_listFilter: string;
private _productService;

get listFilter(): string {
  return this._listFilter;
}
set listFilter(value:string){
  this._listFilter = value;
  this.filteredProducts=this.listFilter? this.performFilter(this.listFilter) : this.products;
}

filteredProducts: IProduct[];
products: IProduct[] = [];

  constructor(private productService: ProductService) {
    
    // this._productService = productService;

  }

  onRatingClicked(message: string): void{
this.pageTitle = 'Product List' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
    product.productName.toLocaleLowerCase().indexOf(filterBy)  !== -1);
  }

  toggleImage(): void {
      this.showImage = !this.showImage;
    }

 ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products,
        this.filteredProducts = this.products
      },
      error: err => this.errorMessage = err
    }) 
 }
}