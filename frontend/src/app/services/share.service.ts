import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private sharedData = new BehaviorSubject<string>(''); // Use BehaviorSubject for two-way communication
  currentData = this.sharedData.asObservable();

  constructor() {}

  sendData(data: string) {
    this.sharedData.next(data);
  }
}
