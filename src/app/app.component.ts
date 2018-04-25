import { Component, OnInit } from '@angular/core';

import { ItemModel } from './model/item.model';
import { ItemService } from './services/item.service';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-acme-supermarket',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 })

export class AppComponent implements OnInit {

  constructor() { }
  
  title = 'Acme Supermarket';
 
  ngOnInit() {
    
  }

}





