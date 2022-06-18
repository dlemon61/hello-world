import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-example';


  products: Product[];
  productService: ProductService;

  constructor(){
    this.productService = new ProductService();
  }

  getProducts(){
    this.products = this.productService.getProducts();
  }



    } 

