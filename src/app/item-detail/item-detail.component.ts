import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ItemModel } from '../model/item.model';
import { ItemService } from '../services/item.service';
import { ShoppingCart } from '../model/shoppingCart.model';

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
        // this.getItem(this.id).subscribe(i => this.item = i);
        this.getItem(this.id)
        .then((val) => 
         { 
           console.log(val);
           this.item = <ItemModel>val;
        })
          .catch((err) => console.error(err));
        

      };

      goBack(): void {
        this.location.back();
      };
      
      getItem(id: number) {
        return this.itemService.getRemoteItem(id);
      }
}