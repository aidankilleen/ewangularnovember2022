import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main-navbar></main-navbar>
    <main class="container flex-shrink-0">
      <router-outlet></router-outlet>
    </main>
    <main-footer></main-footer>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user edit bootstrap';
}
