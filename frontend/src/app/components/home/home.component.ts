import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    items: Item[];
    constructor(private itemService: ItemService) {
        this.items = itemService.getItems();
    }

    selectedMeat: string = 'all';

    get filteredItems(): Item[] {
        if (this.selectedMeat === 'all') {
            return this.items;
        } else {
            return this.items.filter(item => item.meat === this.selectedMeat);
        }
    }

    sortUp() {
        this.items.sort((a, b) => a.price - b.price);
    }

    sortDown() {
        this.items.sort((a, b) => b.price - a.price);
    }

}

