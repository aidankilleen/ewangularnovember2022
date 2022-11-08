import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div [ngClass]="{'dark': darkMode }">

    <input type="date" [(ngModel)]="today"> {{ today | date }}


    <hr>


    <div>
      <input type="radio" 
        *ngFor="let colour of colours"
        [value]="colour"
        [(ngModel)]="selectedColour"
        name="rbColour">
    </div>

    <hr>

    <select [(ngModel)]="selectedColour">
      <option *ngFor="let colour of colours">
        {{ colour }}
      </option>
    </select>
    <div class="box" [ngStyle]="{'background-color': selectedColour }">
      {{ selectedColour }}
    </div>



    <hr>

    <input type="checkbox" [(ngModel)]="darkMode">{{ darkMode ? "Light Mode" : "Dark Mode"}}
    <h1>{{ title | titlecase }}</h1>

    <input type="range" [(ngModel)]="width" max="800"/>
    <input type="range" [(ngModel)]="height" max="600"/>

    <div class="box" [ngStyle]="{'width': width + 'px', 'height': height + 'px' }">
    </div>

    <input type="number" [(ngModel)]="width" max="800"/>

    <hr>

    <button (click)="value=value-1">-</button>
    <input type="range" [(ngModel)]="value">
    <button (click)="value=value+1">+</button><br>
    {{ value }}

    <hr>


    <input [(ngModel)]="country">
    <button (click)="country='Ireland'">Reset</button>
    <br>
    {{ country }}

    <hr>

    <input #txtName [value]="name" (keyup)="onChange(txtName.value)">
    <button (click)="name='Aidan'">Reset</button>
    <hr>
    {{ name }}
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data binding investigation';
  name = "Aidan";
  country = "Ireland";
  value = 50;
  width = 50;
  height = 50;
  darkMode = false;
  today = new Date();

  colours = ['red', 'green', 'blue', 'orange', 'purple', 'white', 'black'];
  selectedColour = this.colours[0];
  onChange(name: string) {
    // read the value in the control
    this.name = name;

  }
}
