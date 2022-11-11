import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-members-page',
  template: `
    <h2>Members only</h2>

    <h3>{{ user.given_name }}</h3>

    <img [src]="user.picture"><br>

    <a [href]="'mailto:' + user.email">{{ user.email }}</a>

    <button (click)="onLogout()">Logout</button>
    <hr>

    {{ user | json }}

  `,
  styleUrls: ['./members-page.component.css']
})
export class MembersPageComponent implements OnInit {

  user: any;
  constructor(public auth: AuthService) { }
  ngOnInit(): void {
    this.auth.getUser()
      .subscribe(user=>{
        this.user = user;
      })
  }
  onLogout () {
    this.auth.logout({returnTo:"http://localhost:4200/home"})
  }
}
