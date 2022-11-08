import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <p>{{ info | titlecase | summary }}</p>

    <p>{{ info | summary:10 }}</p>
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom pipe investigation';

  info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dignissimos quis inventore cumque nesciunt voluptatem doloribus odio vitae aliquam doloremque id qui, ea asperiores, ipsa, rem fugiat provident optio rerum.";


}
