import { Component } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    <button (click)="onShowUserDialog()">Add</button>

    <user-dialog 
      *ngIf="showDialog"
      (save)="onSave($event)"
      (close)="showDialog = false">
    </user-dialog>

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
        <tr *ngFor="let user of userService.getUsers()">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.active ? "Active" : "Inactive" }}</td>
          <td><button (click)="onConfirmDeleteUser(user.id)">X</button></td>
        </tr>
      </tbody>
    </table>
    <!--
    <user 
      *ngFor="let user of userService.getUsers()" 
      [user]="user"
      (changeUser)="onChangeUser($event)"
      (deleteUser)="onDeleteUser($event)"
    >
    </user>
    -->
    <hr>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user edit investigation';
  showDialog = false;

  constructor(public userService: UserService) {
  }

  onShowUserDialog() {
    this.showDialog = true;
  }
  onAddUser() {
    let newUser = new User(99, "new user", "new@gmail.com", false);
    this.userService.addUser(newUser);
  }
  onChangeUser(changedUser: User) {
    this.userService.updateUser(changedUser);
  }
  onConfirmDeleteUser(id: number) {
    if (confirm("Are you sure?")) {
      this.onDeleteUser(id);
    }
  }

  onDeleteUser(id: number) {
    //alert(`delete ${id}`);
    this.userService.deleteUser(id);
  }
  onSave(newUser: User) {
    this.userService.addUser(newUser);
    this.showDialog = false;
  }
}
