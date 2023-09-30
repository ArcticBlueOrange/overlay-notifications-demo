import { Component } from '@angular/core';

@Component({
  selector: 'abo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  links = [
    { name: 'Home', link: 'home', },
    { name: 'Settings', link: 'settings', },
  ]

}
