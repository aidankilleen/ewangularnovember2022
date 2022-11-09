import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  url: string = "http://localhost:3000/users";
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { 

  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`);
  }
  
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  addUser(userToAdd: User):Observable<User> {
    
    return this.httpClient.post<User>(
        this.url, 
        JSON.stringify(userToAdd), 
        { headers:this.headers });

  }
  updateUser(user: User) {

    let userToUpdate = new User(user.id, user.name, user.email, user.active);

    return this.httpClient.put(
      `${this.url}/${userToUpdate.id}`, 
      JSON.stringify(userToUpdate), 
      { headers: this.headers});
    
  }
}
