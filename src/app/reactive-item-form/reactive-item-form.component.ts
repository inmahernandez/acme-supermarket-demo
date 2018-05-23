import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../model/category.model';
import { ItemService } from '../services/item.service';
import { CategoryService } from '../services/categories.service';
import { ItemModel } from '../model/item.model';

@Component({
    selector: 'app-reactive-item-form',
    templateUrl: './reactive-item-form.component.html',
    styleUrls: ['./reactive-item-form.component.css']
})

export class ReactiveItemFormComponent {

    itemForm: FormGroup;
    item: ItemModel;
    id: number;
    categories: Category[];
    submitted = false;
    isEditing = true;

    constructor(private fb: FormBuilder, private categoryService: CategoryService, private itemService: ItemService, private location: Location, private router: Router, private route: ActivatedRoute) {
        this.item = new ItemModel();
        this.createForm();
    }

    createForm() {

        this.itemForm = this.fb.group({
            id: [this.item.id, Validators.required],
            sku: [this.item.sku, Validators.required],
            category: [this.item.category_id, Validators.required],
            name: [this.item.name, Validators.required],
            description: [this.item.description, Validators.required],
            price: [this.item.price, [Validators.required, Validators.min(0)]],
            //TODO: Include http url pattern:  
            picture: [this.item.picture, Validators.pattern('^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}')],

        });

        //Recover id param
        this.route.params
            .subscribe(params => this.id = +params['id']);

        //Load category list
        this.getCategories().then((val) => { //console.log(val);
            this.categories = <Category[]>val;
        })
            .catch((err) => console.error(err));

        //Recover item
        this.getItem(this.id)
            .then((val) => {
                console.log(val);
                //this.item = new ItemModel().deserialize(val);

                this.item = <ItemModel>val;
                console.log(this.item);

                //recover category (by hand??)
                if (this.item != null) {
                    //We are editing, load item values into form
                    var selectedCategory = this.categories.find(cat => cat.id == this.item.category_id);
                    //console.log("READY: " + selectedCategory.id+", " + this.item.category_id);

                    this.itemForm.controls['id'].setValue(this.item.id);
                    this.itemForm.controls['name'].setValue(this.item.name);
                    this.itemForm.controls['description'].setValue(this.item.description);
                    this.itemForm.controls['sku'].setValue(this.item.sku);
                    this.itemForm.controls['picture'].setValue(this.item.picture);
                    this.itemForm.controls['category'].setValue(this.item.category_id);
                    this.itemForm.controls['price'].setValue(this.item.price);

                    this.itemForm.controls['sku'].disable();
                } else {
                    this.isEditing = false;
                    //TODO: How to generate ids automatically?
                    this.itemForm.controls['id'].setValue(665);
                }

            })
            .catch((err) => console.error(err));
    }

    onSubmit() {
        const formModel = this.itemForm.value;

        var saveItem = new ItemModel();
        saveItem.name = formModel.name;
        saveItem.description = formModel.description;
        saveItem.picture = formModel.picture;
        saveItem.price = formModel.price;
        saveItem.category_id = formModel.category_id;
        saveItem.id = formModel.id;
        saveItem.sku = formModel.sku;

        if (this.isEditing) {

            this.itemService.updateItem(saveItem).then((val) => {
                console.log(val);
            }).catch((err) => console.error(err));

        } else {
            this.itemService.addItem(saveItem).then((val) => {
                console.log(val);
            }).catch((err) => console.error(err));
        }
        this.submitted = true;
    }

    rebuildForm() {
        this.itemForm.reset({
            name: this.item.name
        });
    }

    getCategories() {
        return this.categoryService.getCategories();
    }

    getItem(id: number) {
        return this.itemService.getRemoteItem(id);
    }

    newItem() {
        //reset item
        this.item = new ItemModel();
    }

    goBack(): void {
        this.location.back();
    }

    delete(): void {
        this.itemService.deleteRemoteItem(this.item.id).then((val) => {
            //console.log('Todo OK');
        }).catch((err) => console.error(err));
    }

}
