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


    // ngOnInit(): void {
    //   console.log(this.item);

    // }

}
