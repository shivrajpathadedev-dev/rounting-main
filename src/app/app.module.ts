import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './component/products/products.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app.routing';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProductComponent } from './component/products/product/product.component';
import { ProductFormComponent } from './component/products/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetConfirmComponent } from './component/get-confirm/get-confirm.component';
import { UsersDashboardComponent } from './component/users-dashboard/users-dashboard.component';
import { UserFormComponent } from './component/users-dashboard/user-form/user-form.component';
import { UserDetailsComponent } from './component/users-dashboard/user-details/user-details.component';
import { FairsDashboardComponent } from './component/fairs-dashboard/fairs-dashboard.component';
import { FairsDetailsComponent } from './component/fairs-dashboard/fairs-details/fairs-details.component';
import { FairsCardComponent } from './component/fairs-dashboard/fairs-card/fairs-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    ProductFormComponent,
    GetConfirmComponent,
    UsersDashboardComponent,
    UserFormComponent,
    UserDetailsComponent,
    FairsDashboardComponent,
    FairsDetailsComponent,
    FairsCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
