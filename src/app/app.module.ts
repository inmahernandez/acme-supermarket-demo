import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//Custom components
import { AppComponent }  from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsComponent } from './items/items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent }    from './messages/messages.component';
import { LoginComponent }    from './login/login.component';
import { RegisterComponent }    from './register/register.component';

import { environment } from '../environments/environment';

//Providers
import { ItemService } from './services/item.service';
import { GreetingService } from './services/greeting.service';
import { MessageService }       from './services/message.service';
import { AlertService, AuthenticationService, UserService } from './services/index';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  HttpModule,
                  AppRoutingModule,
                  HttpClientModule,
                ],
  declarations: [ AppComponent, ItemDetailComponent, 
        ItemsComponent, DashboardComponent, 
        MessagesComponent, LoginComponent, 
        RegisterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ItemService, MessageService, 
        GreetingService, AuthenticationService,
      UserService, AlertService],
})
export class AppModule { }
