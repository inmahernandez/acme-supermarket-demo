import { HttpHeaderResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ItemModel } from "../model/item.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from "./message.service";
import { Category } from "../model/category.model";


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable()
  export class CategoryService {
    private itemsUrl = 'http://localhost:3000/api/category';
    categories: Category[];
    private loading: boolean;
  
    constructor(
        private http: HttpClient,
        private messageService: MessageService
      ) { 
        this.loading = false;
      }

      getCategories() {
        this.messageService.add(`CategoryService: remotely fetched categories`);
        let url = `${this.itemsUrl}`;
       return this.http.get(url).toPromise();
      }
  }