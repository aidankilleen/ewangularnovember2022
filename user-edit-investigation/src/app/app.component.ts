import { Component } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    <button (click)="onAddUser()">Add</button>

    <user 
      *ngFor="let user of userService.getUsers()" 
      [user]="user"
      (changeUser)="onChangeUser($event)"
      (deleteUser)="onDeleteUser($event)"
    >
    </user>
    <hr>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user edit investigation';

  constructor(public userService: UserService) {
  }

  onAddUser() {
    let newUser = new User(99, "new user", "new@gmail.com", false);
    this.userService.addUser(newUser);
  }
  onChangeUser(changedUser: User) {
    this.userService.updateUser(changedUser);
  }
  onDeleteUser(id: number) {
    //alert(`delete ${id}`);
    this.userService.deleteUser(id);
  }
}
