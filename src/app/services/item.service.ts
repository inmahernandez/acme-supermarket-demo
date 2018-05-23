import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ItemModel } from '../model/item.model';
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

  getRemoteItems() {
    this.messageService.add(`ItemService: remotely fetched items`);
    let url = `${this.itemsUrl}`;
   return this.http.get(url).toPromise();
  }

  getRemoteItem(id: number) {
    this.messageService.add(`ItemService: fetched item id=${id}`);
   // return of(this.items.filter(item => item.id === id)[0]);
   let url = `${this.itemsUrl}/${id}`;
   //return this.http.get(url).map((res: Response) => res.json().response.map((item: ItemModel) => new ItemModel().deserialize(item)));
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

  deleteRemoteItem(id: number) {
    this.messageService.add(`ItemService: deleted item id=${id}`);
    let url = `${this.itemsUrl}/${id}`;
    return this.http.delete(url).toPromise();
  }

  addItem(item: ItemModel) {
    let url = `${this.itemsUrl}`;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify(item);
    console.log(body);
    return new Promise<any>((resolve, reject) => {
      this.http.post(url, body, httpOptions).toPromise()
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }
  
}
