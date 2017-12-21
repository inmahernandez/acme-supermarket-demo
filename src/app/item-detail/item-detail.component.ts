import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ItemModel } from './shared/item.model';
import { ItemService } from '../shoppingCart/shared/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit{
    @Input() item: ItemModel;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location
      ) {};

      ngOnInit(): void {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.itemService.getItem(+params.get('id')))
          .subscribe(item => this.item = item);
      };

      goBack(): void {
        this.location.back();
      };
}