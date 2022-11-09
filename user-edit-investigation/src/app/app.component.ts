import { Component } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    <button (click)="onShowUserDialog()">Add</button>

    <user-dialog 
      title="Add User"
      *ngIf="showDialog"
      (save)="onSave($event)"
      (close)="showDialog = false">
    </user-dialog>
    <user-dialog
      title="Edit User"
      *ngIf="showEditDialog"
      (save)="onUpdate($event)"
      (close)="showEditDialog = false"
      [user]="editingUser">
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
          <td>
            <button (click)="onConfirmDeleteUser(user.id)">X</button>
            <button (click)="onShowEditDialog(user)">Edit</button>
          </td>
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
  showEditDialog = false;
  editingUser = new User();

  constructor(public userService: UserService) {
  }

  onShowEditDialog(userToEdit: User) {
    	this.editingUser = new User(userToEdit.id, userToEdit.name, userToEdit.email, userToEdit.active);
      this.showEditDialog = true;
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

  onUpdate(userToUpdate: User) {
    this.userService.updateUser(userToUpdate);
    this.showEditDialog = false;
  }
}
