import { Injectable } from '@angular/core';
import { Iproduct, Iresproduct } from '../models/products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr: Array<Iproduct> = [
    {
      pname: 'Samsung M31',
      pid: '123',
      pstatus: 'In-Progress',
      canReturn: 1
    },
    {
      pname: 'Samsung TV',
      pid: '124',
      pstatus: 'Dispatched',
      canReturn: 1
    },
    {
      pname: 'iPhone 15',
      pid: '125',
      pstatus: 'Delivered',
      canReturn: 0
    },
    {
      pname: 'OnePlus Nord CE 4',
      pid: '126',
      pstatus: 'In-Progress',
      canReturn: 1
    },
    {
      pname: 'LG Refrigerator',
      pid: '127',
      pstatus: 'Delivered',
      canReturn: 0
    },
    {
      pname: 'Sony Bravia TV',
      pid: '128',
      pstatus: 'Dispatched',
      canReturn: 1
    }
  ];
  constructor() { }

  fetchProducts(): Observable<Iproduct[]> {
    return of(this.productsArr)
  }

  fetchProductById(id: string): Observable<Iproduct> {
    let productObj = this.productsArr.find(p => p.pid === id)!
    return of(productObj)
  }

  createProduct(product: Iproduct): Observable<Iresproduct<Iproduct>> {
    this.productsArr.push(product)
    console.log(product);

    return of({
      msg: `The product ${product.pname} is Created Successfully!!.`,
      data: product
    })
  }

  updateProduct(product: Iproduct): Observable<Iresproduct<Iproduct>> {
    let getIndex = this.productsArr.findIndex(t => t.pid === product.pid)
    this.productsArr[getIndex] = product
    return of({
      msg: `The new product ${product.pname} is Updated successfully!.`,
      data: product
    })
  }

  removeProduct(id: string): Observable<Iresproduct<Iproduct>> {
    let get_index = this.productsArr.findIndex(t => t.pid === id)
    let product = this.productsArr.splice(get_index, 1)
    return of({ 
      msg: `The product ${product[0].pname} is removed Successfully!.`,
      data: product[0]
    })
  }
}
