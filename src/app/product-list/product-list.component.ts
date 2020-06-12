import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product1: Product;
  product2: Product;
  product3: Product;
  product4: Product;
  product5: Product;

  totalValue: number;

  selectedValue: string;

  constructor() {
    this.product1 = new Product(1, 'gopro', 'description of product 1');
    this.product2 = new Product(2, 'jbl', 'description of product 2');
    this.product3 = new Product(3, 'samsung', 'description of product 3');
    this.product4 = new Product(4, 'sony', 'description of product 4');
    this.product5 = new Product(5, 'sonata', 'description of product 5');
    this.totalValue = 0;
  }

  ngOnInit(): void {
  }

  updateTotal(value: number){
    console.log('The child value ', value);
    this.totalValue += value;
    console.log('Total ', this.totalValue);
  }

  displaySelectedProduct(value: Product){
    console.log('The child Selected value ', value.name);
    this.selectedValue = value.name;
  }

}
