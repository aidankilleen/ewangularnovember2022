import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    {{ authenticated ? "Signed In" : "Not Signed In"}}
    
    <a routerLink="home" routerLinkActive="active">Home</a> |
    <a routerLink="about" routerLinkActive="active">About</a> |
    <a routerLink="contact" routerLinkActive="active">Contact Us</a> |
    <a routerLink="members" routerLinkActive="active">Members</a> 
    <hr>
    <router-outlet></router-outlet>
    

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'authentication-investigation';
  authenticated = false;

  constructor(public authService: AuthService) {

  }
  ngOnInit(): void {
    
    this.authService.isAuthenticated$
      .subscribe(authenticated => {
        this.authenticated = authenticated 
      });
  }
}
