import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserHttpService } from './user-http.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <button (click)="onAddUser()">Add User</button>

    <table>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{ user.name }}</td>
          <td><button (click)="onConfirmDelete(user.id)">x</button></td>
        </tr>
      </tbody>
    </table>

<!--
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
-->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ajax investigation';
  stations: any[] = [];

  users: User[] = [];


  constructor(private httpClient: HttpClient, 
              private userService: UserHttpService) {

  }
  ngOnInit(): void {
    this.onClick();
  }

  onAddUser() {

    let newUser = new User(0, "NU", "nu@gmail.com", true);

    this.userService.addUser(newUser)
      .subscribe((addedUser:User) => {
        this.users.push(addedUser);
      });



  }
  onConfirmDelete(id: number) {
    if (confirm("Are you sure?")) {
      this.userService.deleteUser(id)
        .subscribe(()=>{
          //remove this user from the users array
          let index = this.users.findIndex(user => user.id == id);
          this.users.splice(index, 1);
        });
    }
  }
  onClick() {

    this.userService.getUsers()
      .subscribe((data: User[])=> {
        this.users = data;
      })

    // Original asynchronous call
    // callbacks
    // setTimeout(()=>alert("timeout"), 1000);

    // Promise
    // fetch("http://api.citybik.es/v2/networks/cork")
    //.then(()=>alert("fetch has returned"));

    // Observable
    /*
    this.httpClient.get("http://api.citybik.es/v2/networks/cork")
      .subscribe((data: any) => {
        
        this.stations = data.network.stations;
      }
    );
      */


  }
}
