import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  url: string = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { 

  }

  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  addUser(userToAdd: User):Observable<User> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    
    return this.httpClient.post<User>(
        this.url, 
        JSON.stringify(userToAdd), 
        { headers });

  }
}
