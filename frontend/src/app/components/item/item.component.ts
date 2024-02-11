import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

    @Input() item: Item | any;

    constructor(private itemService: ItemService, private elementRef: ElementRef) {}

    canOrder: boolean = false;
    ngOnInit(): void {
        if(localStorage.getItem('location')){
            this.canOrder = true;
        }
    }


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

        const orderCart = this.elementRef.nativeElement.ownerDocument.getElementById('orderCart');
        const orderCartText = this.elementRef.nativeElement.ownerDocument.getElementById('cartTitle');
        // console.log('Order Cart:', orderCart);
        if (orderCart) {
            orderCart.style.color = 'rgb(0, 200, 0)';
            orderCart.style.textShadow = '0 0 10px rgb(0, 200, 0)';
            setTimeout(() => {
                orderCart.style.color = 'black';
            }, 1000);
        }

        if (orderCartText) {
            orderCartText.style.color = 'rgb(0, 200, 0)';
            setTimeout(() => {
                orderCartText.style.color = 'black';
            }, 1000);
        }
        


        
    }

}
