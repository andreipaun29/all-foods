import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    items: Item[];
    constructor(private itemService: ItemService, private router: Router) {
        this.items = itemService.getItems();
    }
    
    selectedMeat: string = 'all';
    currentUser: string = localStorage.getItem('firstName') ?? '';
    currentId: string = localStorage.getItem('userId') ?? '';
    showDropdown: boolean = false;

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

    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
    }

    account() {
        this.router.navigate(['account/' + this.currentId]);
    }



}

