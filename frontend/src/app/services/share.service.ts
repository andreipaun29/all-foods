import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Order } from '../models/order';
@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private sharedData = new BehaviorSubject<string>(''); 
  private orderSubject = new Subject<Order[]>();
  currentData = this.sharedData.asObservable();

  constructor() {}


  sendOrder(order: Order[]) {
    this.orderSubject.next(order);
  }

  getOrder(): Observable<Order[]> {
    return this.orderSubject.asObservable();
  }

  sendData(data: string) {
    this.sharedData.next(data);
  }
}
