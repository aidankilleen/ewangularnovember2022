import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '../user-http.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list-page',
  template: `
    <h2>User List</h2>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td><a [routerLink]="'' + user.id">{{ user.id }}</a></td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.active ? "Active" : "Inactive" }}</td>
        </tr>
      </tbody>
    </table>


  `,
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  users: User[] = [];

  constructor(private userHttpService: UserHttpService) { }

  ngOnInit(): void {
    this.userHttpService.getUsers()
      .subscribe((users:User[])=>this.users = users);
  }

}
