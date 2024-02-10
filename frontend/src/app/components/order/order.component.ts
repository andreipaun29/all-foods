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
  total: number =  0;
  showDropdown: boolean = false;

  ngOnInit(): void {


    this.shareService.getOrder().subscribe((order: Order) => {

      let total = 0;
      let location = '';

      console.log('Order received in OrderComponent:', order);
        total = order.total;
  
      if(location ){
        console.log('Location:', location);
        //get the element in the html with id="location" and set its innerHTML to the location
        const locationElement = document.getElementById("location");
        if (locationElement) {
          locationElement.innerHTML = location;
        }
      }
      
      
    });
    
    const order = JSON.parse(localStorage.getItem('order') || '{}');
    console.log('Orders:', order);
    


        this.items = order.items;
      
    
    
    console.log('Items:', this.items);
    
    // Calculate the total
    for (let i = 0; i < this.items.length; i++) {
      this.total += this.items[i].price;
    }
    //round the total to 2 decimal places
    this.total = Math.round(this.total * 100) / 100;

     
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

    removeItem(index: number): void {
      localStorage.setItem('modified', 'true');
      // Remove the item at the specified index
      this.items.splice(index, 1);
      // Calculate the total
      this.total = 0;
      for (let i = 0; i < this.items.length; i++) {
        this.total += this.items[i].price;
      }
      //round the total to 2 decimal places
      this.total = Math.round(this.total * 100) / 100;
     
      //modify the order in local storage with the new items and total
      let order = JSON.parse(localStorage.getItem('order') || '{}');
      order.items = this.items;
      order.total = this.total;
      

      localStorage.setItem('order', JSON.stringify(order));
    }
    
    
}

