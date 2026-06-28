import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute,Router } from '@angular/router';
import { Iproduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId!: string
  productObj!: Iproduct
  constructor(
    private _routes: ActivatedRoute,
    private _productService: ProductsService,
    private _router: Router,
    private _matdilaog:MatDialog,
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    // this.productId = this._routes.snapshot.params['pid']
    this._routes.params.subscribe(params => {
      this.productId = params['pid'];
      this._productService.fetchProductById(this.productId)
        .subscribe({
          next: data => {
            this.productObj = data;
          },
          error: err => {
            console.log(err);
          }
        });

    });
  }

onRemove() {
    let matconfig = new MatDialogConfig()
    matconfig.data = `Are you sure do you want to remove this product!!`;
    matconfig.disableClose = true;
    matconfig.width = '400px';
    let dialogref = this._matdilaog.open(GetConfirmComponent, matconfig)
    dialogref.afterClosed()
      .subscribe(res => {
        if (res) {
          this._productService.removeProduct(this.productId)
            .subscribe({
              next: data => {
                this._productService.fetchProducts()
                  .subscribe(products => {
                    if (products.length > 0) {
                      this._router.navigate(['/product', products[0].pid]);
                this._snackbar.openSuccessSnackbar(data.msg)
                    } else {
                      this._router.navigate(['/product']);
                    }
                  });
              },
              error: err => {
                this._snackbar.openErrorSnackbar(err.msg)
              }
            })
        }
        else {
          this._snackbar.openErrorSnackbar(`Product removale cancelled!!`)
          this._router.navigate(['./product',this.productObj.pid])

        }
      })
  }

}