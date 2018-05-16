import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ItemModel } from '../model/item.model';
import { ITEMS } from '../shoppingCart/shared/mock-items';
import { MessageService } from './message.service';
import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {
  private itemsUrl = 'http://localhost:3000/api/items';
  items: ItemModel[];
  private loading: boolean;

  

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { 
    this.loading = false;
  }

  getItems(): Observable<ItemModel[]> {
    // Todo: send the message _after_ fetching the items
    this.messageService.add('ItemService: fetched items');
    return of(ITEMS);
  }

  getNonDeletedItems(): Observable<ItemModel[]> {
   // Todo: send the message _after_ fetching the items
    this.messageService.add('ItemService: fetched non-deleted items');
    return of(ITEMS.filter(item => item.deleted === false));
  }

  /**
   * This method will be used once that we have a backend REST endpoint to call
   */
  /*getRemoteItems():  Observable<any> {
    // Todo: send the message _after_ fetching the items
    this.messageService.add('ItemService: remotely fetched non-deleted items');
    return this.http.get(this.itemsUrl);
   }*/

   getRemoteItems() {
    this.messageService.add(`ItemService: remotely fetched items`);
    let url = `${this.itemsUrl}`;
   return this.http.get(url).toPromise();
  }

  getItem(id: number): Observable<ItemModel> {
    // Todo: send the message _after_ fetching the item
    this.messageService.add(`ItemService: fetched item id=${id}`);
    return of(ITEMS.filter(item => item.id === id)[0]);
  }

  getRemoteItem(id: number) {
    this.messageService.add(`ItemService: fetched item id=${id}`);
   // return of(this.items.filter(item => item.id === id)[0]);
   let url = `${this.itemsUrl}/${id}`;
   return this.http.get(url).toPromise();
  }

  updateItem(it: ItemModel) {
    let url = `${this.itemsUrl}/${it.id}`;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');


    let body = JSON.stringify(it);
    console.log(body);
     /*return this.http.put(url, body, httpOptions).subscribe(
             data => {
               // refresh the list
               return true;
             },
             error => {
               console.error("Error saving item!");
               return Observable.throw(error);
             }
          );*/
          return new Promise<any>((resolve, reject) => {
            this.http.put(url, body, httpOptions).toPromise()
            .then(res => {
              resolve(res);
            }, err => reject(err))
          })
  }
  
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/