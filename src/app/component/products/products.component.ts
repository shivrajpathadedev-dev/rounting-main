import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products:Array<Iproduct>=[]
  constructor(
    private _productsService:ProductsService,
    private  _router:Router
  ) { }

  ngOnInit(): void {
    this._productsService.fetchProducts()
    .subscribe({
      next:data=>{
        this.products=data
        this._router.navigate(['/product',this.products[0].pid])
      },
      error:err=>{
        console.log(err);
      }
    })
  }
}
