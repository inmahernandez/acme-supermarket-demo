import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ItemModel } from './shared/item.model';
import { ItemService } from '../shoppingCart/shared/item.service';
import { ShoppingCart } from '../shoppingCart/shared/shoppingCart.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit{
    @Input() item: ItemModel;
    id: number;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location
      ) {};

      ngOnInit(): void {
        
          this.route.params
          .subscribe(params => this.id = +params['id']);
          console.log(this.id);
         this.getItem(this.id).subscribe(i => this.item = i);
        

      };

      goBack(): void {
        this.location.back();
      };
      
      getItem(id: number) {
        return this.itemService.getRemoteItem(id);
      }
}