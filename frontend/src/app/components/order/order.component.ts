import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { ShareService } from '../../services/share.service';
import { Item } from 'src/app/models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  constructor(private shareService: ShareService, private router:Router) { }

  order: Order[] = [];

  location: string = localStorage.getItem('location') ?? '';
  
  
  items: Item[] = [];

  currentUser: string = localStorage.getItem('firstName') ?? '';
  currentId: string = localStorage.getItem('userId') ?? '';
  total: number = localStorage.getItem('total') ? parseFloat(localStorage.getItem('total') ?? '0') : 0;
  showDropdown: boolean = false;

  ngOnInit(): void {


    this.shareService.getOrder().subscribe((order: Order[]) => {

      let total = 0;
      let location = '';

      console.log('Order received in OrderComponent:', order);
      for(let i = 0; i < order.length; i++){
        total += order[i].total;
      }
  
      if(location ){
        console.log('Location:', location);
        //get the element in the html with id="location" and set its innerHTML to the location
        const locationElement = document.getElementById("location");
        if (locationElement) {
          locationElement.innerHTML = location;
        }
      }
      
      
    });
    
    const orders = JSON.parse(localStorage.getItem('orders') || '{}');
    console.log('Orders:', orders);
    

    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      for (let j = 0; j < order.items.length; j++) {
        this.items.push(order.items[j]);
      }
    }
    
    console.log('Items:', this.items);
    
    

     
    }


    account() {
      this.router.navigate(['account/' + this.currentId]);
    }

    logout() {
      localStorage.clear();
      this.router.navigate(['login']);
    }

    home() {
      this.router.navigate(['home']);
    }
    
    
}

