import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    new User(1, "Alice", "alice@gmail.com", false ), 
    new User(2, "Bob", "bob@gmail.com", true ), 
    new User(3, "Carol", "carol@gmail.com", true ), 
    new User(4, "Dan", "dan@gmail.com", false ) 
  ];
  constructor() { }

  public getUsers() {
    return this.users;
  }

  public deleteUser(id: number) {
    let index = this.users.findIndex(user => user.id == id);
    this.users.splice(index, 1);
  }

  public addUser(userToAdd: User) {

    let maxId = this.users[0] ? this.users[0].id : 0;
    this.users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });
    userToAdd.id = maxId + 1;
    this.users.push(userToAdd);
  }

  public updateUser(changedUser: User) {
    let index = this.users.findIndex(user => user.id == changedUser.id);
    this.users.splice(index, 1, changedUser);
  }
}
