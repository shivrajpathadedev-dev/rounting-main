
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { FairsComponent } from './component/fairs/fairs.component';
import { ProductFormComponent } from './component/products/product-form/product-form.component';
import { ProductComponent } from './component/products/product/product.component';
import { UsersDashboardComponent } from './component/users-dashboard/users-dashboard.component';
import { UserFormComponent } from './component/users-dashboard/user-form/user-form.component';
import { UserDetailsComponent } from './component/users-dashboard/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'home',//BASE_URL/HOME
    component: HomeComponent,
  },
  {
    path: '',//BASE_URL localhost:4200
    redirectTo:'home',
    pathMatch:'full'
  },
   {
    path: 'users',//BASE_URL/USERS
    component:UsersDashboardComponent,
    children:[
      {
        path:'addusers',
        component:UserFormComponent
      },
      {
        path:':uid',
        component:UserDetailsComponent
      },
      {
        path:':uid/edit',
        component:UserFormComponent
      }
    ]
  },
    {
    path: 'product',//BASE_URL/PRODUCT
    component: ProductsComponent,
    children:[
      {
    path: 'addProduct',//BASE_URL/PRODUCT/addProduct
    component: ProductFormComponent,
  },
   {
    path: ':pid',//BASE_URL/PRODUCT/123
    component: ProductComponent,
  },
  {
    path: ':pid/edit',//BASE_URL/PRODUCT
    component: ProductFormComponent,
  }
    ]
  },
   
    {
    path: 'fairs',//BASE_URL/FAIRS
    component:FairsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }