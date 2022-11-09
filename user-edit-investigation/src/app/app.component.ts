import { Component, OnInit } from '@angular/core';
import { UserHttpService } from './user-http.service';
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
        <tr *ngFor="let user of users">
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
export class AppComponent implements OnInit {
  title = 'user edit investigation';
  showDialog = false;
  showEditDialog = false;
  editingUser = new User();
  users: User[] = [];

  constructor(public userService: UserService, 
             public userHttpService: UserHttpService) {
  }
  ngOnInit(): void {
    this.userHttpService.getUsers()
      .subscribe((users:User[])=>this.users = users);
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
    this.userHttpService.addUser(newUser)
      .subscribe((addedUser:User) => {
        this.users.push(addedUser);
      })
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
    this.userHttpService.deleteUser(id)
      .subscribe(()=>{
        let index = this.users.findIndex(user => user.id == id);
        this.users.splice(index, 1);
      })
  }

  onSave(newUser: User) {
    this.userHttpService.addUser(newUser)
      .subscribe((addedUser: User) => {
        this.users.push(addedUser);
      });



    this.showDialog = false;
  }

  onUpdate(userToUpdate: User) {
    this.userHttpService.updateUser(userToUpdate)
      .subscribe(()=>{
        let index = this.users.findIndex(user => user.id == userToUpdate.id);
        this.users.splice(index, 1, userToUpdate);
      });
    this.showEditDialog = false;
  }
}
