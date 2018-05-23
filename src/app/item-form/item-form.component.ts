import { Component, Input } from '@angular/core';

import { ItemModel }    from '../model/item.model';
import {Category} from '../model/category.model';
import {CategoryService} from '../services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  @Input() item: ItemModel;
  id: number;
    //item = new ItemModel();
  categories: Category[];

  submitted = false;

  constructor(private categoryService: CategoryService,   private itemService: ItemService, private location: Location, private router: Router, private route: ActivatedRoute) { 
    //this.data = [];
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
 // get diagnostic() { return JSON.stringify(this.item); }

 ngOnInit() {

  //Add validators to form
  

   //Recover id param
  this.route.params
    .subscribe(params => this.id = +params['id']);
  console.log(this.id);
  
  //Recover category list
  this.getCategories().then((val) => 
  { //console.log(val);
    this.categories = <Category[]>val;
 })
   .catch((err) => console.error(err));
   
   //Recover item
   this.getItem(this.id)
   .then((val) => 
    { 
      console.log(val);
      this.item = <ItemModel>val;
   })
     .catch((err) => console.error(err));
    
 }
 newItem() {
   //reset item
  this.item = new ItemModel();
}
  
goBack(): void {
    this.location.back();
  };

  getCategories() {
    return this.categoryService.getCategories();
  }
  
  getItem(id: number) {
    return this.itemService.getRemoteItem(id);
  }
}