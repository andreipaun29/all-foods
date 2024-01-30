import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  constructor(private shareService: ShareService) { }

  order: Order[] = [];
  

  ngOnInit(): void {
    this.shareService.getOrder().subscribe((order: Order[]) => {

      let total = 0;
      let location = '';

      console.log('Order received in OrderComponent:', order);
      for(let i = 0; i < order.length; i++){
        total += order[i].total;
      }

      location = order[0].location;
  
      console.log(total);
      console.log(location);
    });

    
    
}

}
