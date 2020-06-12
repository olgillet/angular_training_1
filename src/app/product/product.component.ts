import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  myProduct: Product;

  @Output()
  outputElement = new EventEmitter<number>();

  @Output()
  outputSelectedProduct = new EventEmitter<string>();

  productNb: number;

  constructor() {
    this.productNb = 0;
  }

  ngOnInit(): void {
  }

  clickPlus(){
    this.productNb ++;
    this.outputElement.emit(1);
  }

  clickMinus(){
    this.productNb --;
    this.outputElement.emit(-1);
  }

  resetProductNb(){
    if (this.productNb > 0){
      this.outputElement.emit(-this.productNb);
    }
    else{
      this.outputElement.emit(-this.productNb);
    }
    this.productNb = 0;
  }

  selectThisProduct(selectedProduct){
    this.outputSelectedProduct.emit(selectedProduct);
  }


}
