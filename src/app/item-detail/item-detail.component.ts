import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';


import { ItemModel } from '../model/item.model';
import { ItemService } from '../services/item.service';
import { ShoppingCart } from '../model/shoppingCart.model';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit{
    @Input() item: ItemModel;
    id: number;
    updateForm: FormGroup;
    errorMessage: string = '';
    successMessage: string = '';

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location,
        private fb: FormBuilder,
        private messageService: MessageService
      ) {
        this.createForm();
      };

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

      createForm() {
        this.updateForm = this.fb.group({
          name: ['', Validators.required ],
          description: ['',Validators.required],
          price: ['',Validators.required, Validators.min(0)],
          picture: [''],
          category: ['', Validators.required]
        });
      }

      goBack(): void {
        this.location.back();
      };
      
      getItem(id: number) {
        return this.itemService.getRemoteItem(id);
      }
      tryUpdate(){
       // console.log('Updating: ' + this.item.name);
        this.itemService.updateItem(this.item)
        .then(res => {
          console.log(res);
          this.errorMessage = "";
          this.successMessage = "The item has been succesfully updated";
          this.messageService.add(this.successMessage);
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = "";
        })
      }
      
}