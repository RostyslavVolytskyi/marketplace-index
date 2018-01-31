import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import {TableViewService} from "./table-view/table-view.service";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./login/auth.service";
import { CategoryRowComponent } from './category-row/category-row.component';
import { BundleRowComponent } from './bundle-row/bundle-row.component';
import { ItemRowComponent } from './item-row/item-row.component';
import { DataTransferService } from './services/data-transfer.service';


@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    LoginComponent,
    CategoryRowComponent,
    BundleRowComponent,
    ItemRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TableViewService, AuthService, DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
