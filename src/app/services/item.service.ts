import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Item } from '../model/item';
import { ITEMS } from '../mock-items';
import { MessageService } from './message.service';

@Injectable()
export class ItemService {
  private itemsUrl = 'http://demo2821337.mockable.io/';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getItems(): Observable<Item[]> {
    // Todo: send the message _after_ fetching the items
    this.messageService.add('ItemService: fetched items');
    return of(ITEMS);
  }

  getNonDeletedItems(): Observable<Item[]> {
   // Todo: send the message _after_ fetching the items
    this.messageService.add('ItemService: fetched non-deleted items');
    return of(ITEMS.filter(item => item.deleted == false));
  }

  /**
   * This method will be used once that we have a backend REST endpoint to call
   */
  getRemoteItems():  Observable<any> {
    // Todo: send the message _after_ fetching the items
    this.messageService.add('ItemService: fetched non-deleted items');
    return this.http.get(this.itemsUrl);
   }

  getItem(id: number): Observable<Item> {
    // Todo: send the message _after_ fetching the item
    this.messageService.add(`ItemService: fetched item id=${id}`);
    return of(ITEMS.filter(item => item.id === id)[0]);
  }

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/