import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/api/toast.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'abo-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {

  messages: any[] = [];
  open: boolean = true;
  destroyDelay: number = 5000;
  destroyTimer: any;

  constructor(private toast: ToastService) { }

  ngOnInit(): void {
    this.toast.getNotifications().subscribe(
      (message) => {
        if (message.content) {
          this.messages.push(message);
          this.resetTimer();
        }
      }
    );
  }

  toggleOpen() {
    this.open = !this.open;
  }

  dismiss(i: number) {
    this.messages = [
      ...this.messages.slice(0, i),
      ...this.messages.slice(i + 1)
    ];
    this.resetTimer();
  }

  toastClass() {
    // get the most critical level from all the notifications
    if (this.messages.filter(m => m.classes.indexOf('danger') >= 0).length)
      return 'danger';
    else if (this.messages.filter(m => m.classes.indexOf('success') >= 0).length)
      return 'success';
    return 'info';
  }

  resetTimer() {
    clearTimeout(this.destroyTimer);
    this.initTimer();
  }

  private initTimer() {
    this.destroyTimer = setTimeout(() => {
      if (this.messages.length > 0) {
        this.dismiss(0);
        this.initTimer();
      }
    }, this.destroyDelay);
  }

}
