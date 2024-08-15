import { error } from 'console';
import { ProductService } from './../product.service';

/* import { IProduct } from '../iproduct';
 */ import { Component, OnInit } from '@angular/core';
import { cpSync } from 'fs';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productList: IProduct[] = [];
  constructor(private _ProductService: ProductService) {}
  ngOnInit(): void {
    this._ProductService.getProduct().subscribe({
      next: (res) => {
        console.log(res);
        this.productList = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
