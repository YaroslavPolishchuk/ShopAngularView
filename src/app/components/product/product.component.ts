import {Component, OnInit} from '@angular/core';
import {Product} from '../../Models/Products';
import {ProductsService} from '../../Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  imgSrc = 'https://shopweb.azurewebsites.net';
  constructor(private service: ProductsService) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(x => {
      console.log(x);
      this.products = x;
    });
  }
}
