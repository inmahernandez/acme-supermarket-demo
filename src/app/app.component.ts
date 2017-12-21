import { Component, OnInit } from '@angular/core';

import { ItemModel } from './item-detail/shared/item.model';
import { ItemService } from './shoppingCart/shared/item.service';
import { MessagesComponent } from './messages/messages.component';
import { GreetingService } from './shared/greeting.service';

@Component({
  selector: 'app-acme-supermarket',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 })

export class AppComponent implements OnInit {

  constructor(private greetingService: GreetingService) { }
  
  title = 'Acme Supermarket';
  greeting = 'Default greeting';

  ngOnInit() {
    this.getGreeting();
  }

  getGreeting(): void {
    this.greetingService.getGreeting()
       .subscribe(greeting => this.greeting = greeting.content);
  }
}





