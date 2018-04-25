import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/es';
import { ReactiveFormsModule } from '@angular/forms';

//Firebase auth
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
import { UserComponent } from './user/user.component';

import { environment } from '../environments/environment';

//Providers
import { ItemService } from './services/item.service';
import { MessageService } from './services/message.service';
import { AlertService} from './services/alert.service';
import {  AuthenticationService} from './services/authentication.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth.guard';
import { UserResolver } from './user/user.resolver';

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
                  AngularFireModule.initializeApp(environment.firebase),
                  AngularFireAuthModule, // imports firebase/auth, only needed for auth features
                  ReactiveFormsModule
                ],
  declarations: [ AppComponent, ItemDetailComponent, 
        ShoppingCartComponent, DashboardComponent, 
        MessagesComponent, LoginComponent, 
        RegisterComponent, UserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [    ItemService, 
                  MessageService, 
                  AuthenticationService,
                  UserService, 
                  AlertService,
                AuthGuard,
              UserResolver],
})
export class AppModule { }
