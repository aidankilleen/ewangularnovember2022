import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <nav>
      <a routerLink="/home">Home</a> |
      <a routerLink="/about">About Us</a> |
      <a routerLink="/contact">Contact Us</a> |
      <a routerLink="/users">Users</a> 

    </nav>
    <hr>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spa investigation';
}
