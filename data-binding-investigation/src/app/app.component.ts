import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <input [(ngModel)]="country">
    <button (click)="country='Ireland'">Reset</button>
    <br>
    {{ country }}

    <hr>

    <input #txtName [value]="name" (keyup)="onChange(txtName.value)">
    <button (click)="name='Aidan'">Reset</button>
    <hr>
    {{ name }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data binding investigation';
  name = "Aidan";
  country = "Ireland";

  onChange(name: string) {
    // read the value in the control
    this.name = name;

  }
}
