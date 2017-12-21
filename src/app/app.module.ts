import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/es';

import { Ng2TableModule } from 'ng2-table/components/ng-table-module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';

//Custom components
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ShoppingCartComponent } from './shoppingCart/shoppingCart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { environment } from '../environments/environment';

//Providers
import { ItemService } from './shoppingCart/shared/item.service';
import { GreetingService } from './shared/greeting.service';
import { MessageService } from './messages/shared/message.service';
import { AlertService, AuthenticationService, UserService } from './shared/index';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  HttpModule,
                  AppRoutingModule,
                  HttpClientModule,
                  CommonModule,
                  Ng2TableModule,
                  PaginationModule.forRoot(),
                  TabsModule,
                ],
  declarations: [ AppComponent, ItemDetailComponent, 
        ShoppingCartComponent, DashboardComponent, 
        MessagesComponent, LoginComponent, 
        RegisterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ItemService, MessageService, 
        GreetingService, AuthenticationService,
      UserService, AlertService],
})
export class AppModule { }
