import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private notification$ = new BehaviorSubject<Message>(
    { content: "", classes: [] }
  );

  constructor() { }
  showNotification(message: string, type: string) {
    const m = {
      content: message,
      classes: [type || 'info']
    }
    this.notification$.next(m);
  }

  getNotifications(): Observable<Message> {
    return this.notification$.asObservable();
  }

}
