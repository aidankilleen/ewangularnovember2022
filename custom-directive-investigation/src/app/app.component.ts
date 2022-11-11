import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <div appHighlight>This is a div</div>

    <hr>
    <input 
      type="radio" 
      *ngFor="let option of options" 
      name="rbOption"
      [value]="option"
      [(ngModel)]="selectedOption"
      >
    <br>
    <input [allcaps]="selectedOption">{{selectedOption}}

    <hr>
    <input allcaps="upper"><br>
    <input allcaps="lower"><br>
    <input allcaps="title"><br>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom directive investigation';
  
  options= ["upper", "lower", "title"];
  selectedOption = "upper";

}
