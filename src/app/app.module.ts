import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent }  from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './services/item.service';
import { GreetingService } from './services/greeting.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { MessageService }       from './services/message.service';
import { MessagesComponent }    from './messages/messages.component';

import { environment } from '../environments/environment';


@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  AppRoutingModule,
                  HttpClientModule,
                ],
  declarations: [ AppComponent, ItemDetailComponent, ItemsComponent, DashboardComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ItemService, MessageService, GreetingService],
})
export class AppModule { }
