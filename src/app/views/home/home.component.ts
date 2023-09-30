import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/api/toast.service';

@Component({
  selector: 'abo-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
  ],
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private toast: ToastService) { }

  sendToast(type: string) {
    this.toast.showNotification(`This is a test ${type} notification`, type);
  }

  ngOnInit(): void {
    // let classes = ['info', 'success', 'danger'];
    // for (let x of [1, 2, 3, 4, 5, 6,7,8,9])
    //   this.sendToast(classes[(Math.random() * classes.length)])
  }

}
