import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

    @Input() item: Item | any;

    constructor(private itemService: ItemService) {}

    quantity: number = 1;

    quantityMinus() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

    quantityPlus() {
        this.quantity++;
    }

    addToCart() {
        this.itemService.addToCart(this.item, this.quantity);        
    }

}
