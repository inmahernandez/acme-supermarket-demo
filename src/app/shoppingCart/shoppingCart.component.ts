import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ItemModel } from '../model/item.model';
import { ItemService } from '../services/item.service';
import { ShoppingCart } from '../model/shoppingCart.model';

@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {title: 'SKU', name: 'sku', sort: '', filtering: {filterString: '', placeholder: 'Filter by SKU'}},
    {title: 'Description', name: 'description', sort: 'asc', filtering: {filterString: '', placeholder: 'Filter by description'}},
    {title: 'Price', name: 'price', sort: '', filtering: {filterString: '', placeholder: 'Filter by price.'}},
    //{title: 'Category', name: 'category', sort: '', filtering: {filterString: '', placeholder: 'Filter by category.'}}
  ];
  public page = 1;
  public itemsPerPage = 10;
  public maxSize = 5;
  public numPages = 1;
  public length = 0;
  data: any[];

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };
  
 

  constructor(private itemService: ItemService,  private router: Router, private route: ActivatedRoute) { 
    this.data = [];
  }

  ngOnInit() {
    this.getItems()
        .then((val) => 
         { //console.log(val);
           this.data = <ItemModel[]>val;
           this.itemService.items = this.data;
          this.onChangeTable(this.config);
        })
          .catch((err) => console.error(err));
  }
  
  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].toString().toLowerCase().match(column.filtering.filterString.toLowerCase());
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    const tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        let row = item[column.name];
        if (row != null && row.toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      //Object.assign(this.config.filtering, config.filtering);
      this.config.filtering = config.filtering;
    }

    if (config.sorting) {
      //Object.assign(this.config.sorting, config.sorting);
      this.config.sorting = config.sorting;
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
      this.router.navigate(['/detail/'+(+data.row.id)]);
  }

  getItems() {
   // this.itemService.getNonDeletedItems()
   
    return this.itemService.getRemoteItems();

   
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/