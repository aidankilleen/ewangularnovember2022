import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    <button (click)="onClick()">Make Ajax Call</button>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Empty Slots</th>
        <th>Free Bikes</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let station of stations"
        [ngStyle]="{'background-color': station.free_bikes < 5 ? 'lightcoral' : 'lightgreen'}"
      >
        <td>{{ station.name }}</td>
        <td>{{ station.empty_slots }}</td>
        <td>{{ station.free_bikes }}</td>
      </tr>
    </tbody>
  </table>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ajax investigation';
  stations: any[] = [];

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.onClick();
  }

  onClick() {

    // Original asynchronous call
    // callbacks
    // setTimeout(()=>alert("timeout"), 1000);

    // Promise
    // fetch("http://api.citybik.es/v2/networks/cork")
    //.then(()=>alert("fetch has returned"));

    // Observable
    this.httpClient.get("http://api.citybik.es/v2/networks/cork")
      .subscribe((data: any) => {
        
        this.stations = data.network.stations;
      }
    );



  }
}
