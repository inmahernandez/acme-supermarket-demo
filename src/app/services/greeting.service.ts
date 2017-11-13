import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { MessageService } from './message.service';

@Injectable()
export class GreetingService {
    private greetingUrl = 'http://rest-service.guides.spring.io/greeting';
    constructor(
      private http: HttpClient,
      private messageService: MessageService
    ) { }
  
    getGreeting(): Observable<any> {
      // Todo: send the message _after_ fetching the items
      this.messageService.add('GreetingService: fetched greeting');
     // return of('This is a greeting');
     var response = this.http.get(this.greetingUrl);
     return response;
    }
}
  