import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../item-detail/shared/item.model';
import { ItemService } from '../shoppingCart/shared/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  items: ItemModel[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getNonDeletedItems()
      .subscribe(data => this.items = data.slice(1, 5));
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/