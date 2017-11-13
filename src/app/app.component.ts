import { Component, OnInit } from '@angular/core';

import { Item } from './model/item';
import { ItemService } from './services/item.service';
import { MessagesComponent } from './messages/messages.component';
import { GreetingService } from './services/greeting.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 })

export class AppComponent  {

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





