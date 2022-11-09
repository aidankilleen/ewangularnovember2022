import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHttpService } from '../user-http.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail-page',
  template: `
    <h2>User Detail</h2>
    <table>
      <tbody>
        <tr><td>Id</td><td>{{ user.id }}</td></tr>
        <tr><td>Name</td><td>{{ user.name }}</td></tr>
        <tr><td>Email</td><td>{{ user.email }}</td></tr>
        <tr><td>Active</td><td>{{ user.active ? "Active" : "Inactive" }}</td></tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {

  id:number = -1;
  user: User = new User();

  constructor(private route:ActivatedRoute, 
              private userHttpService: UserHttpService) { 
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.id = parseInt(params["id"]);

      this.userHttpService.getUser(this.id)
        .subscribe((user:User)=> {
          this.user = user;
        });

    });
  }

}
