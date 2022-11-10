import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserHttpService } from '../user-http.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list-page',
  template: `
    <button 
      class="btn btn-success"
      (click)="onShowUserDialog(userDialog)"
    >
      <i class="fa fa-user-plus"></i>
    </button>

    <table class="table">
      <thead> 
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.active ? "Active" : "Inactive" }}</td>
          <td>
            <button (click)="showConfirmModal(confirmDialog, user)" class="btn btn-danger btn-sm">
              <i class="fa fa-times"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <ng-template #userDialog let-usermodal>
      <div class="modal-header">
        <h3>User Dialog</h3>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="txtName" class="form-label">Name</label>
          <input 
            class="form-control" 
            id="txtName" 
            placeholder="Your name"
            [(ngModel)]="editingUser.name">
        </div>
        <div class="mb-3">
          <label for="txtEmail" class="form-label">Name</label>
          <input 
            class="form-control" 
            type="email"
            id="txtEmail" 
            placeholder="name@gmail.com"
            [(ngModel)]="editingUser.email">
        </div>
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="checkbox" 
            id="chkActive"
            [(ngModel)]="editingUser.active">
          <label class="form-check-label" for="flexCheckDefault">
            Active
          </label>
        </div>        
      </div>
      <div class="modal-footer">
        <button
          class="btn btn-success"
          (click)="usermodal.close('ok')"
        >Ok</button>
        <button
          class="btn btn-secondary"
          (click)="usermodal.dismiss('no')"
        >Cancel</button>
      </div>
    </ng-template>    

    <ng-template #confirmDialog let-modal>
      <div class="modal-header">
        <h3>Confirm</h3>
      </div>
      <div class="modal-body">
        {{ confirmDialogMessage }}

      </div>
      <div class="modal-footer">
        <button
          class="btn btn-success"
          (click)="modal.close('ok')"
        >Ok</button>
        <button
          class="btn btn-secondary"
          (click)="modal.dismiss('no')"
        >Cancel</button>
      </div>
    </ng-template>


  `,
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  users: User[];
  editingUser: User = new User();

  confirmDialogMessage = "Are you sure?";

  constructor(private userService: UserHttpService,
    private modalService: NgbModal) { }

  ngOnInit(): void {

    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }
  onShowUserDialog(content: any) {
    this.modalService.open(content)
      .result.then(
        () => {
          this.userService.addUser(this.editingUser)
            .subscribe((addedUser: User) => {
              this.users.push(addedUser);
            })
        },
        () => {
          //alert("cancel");
        }
      );
  }
  showConfirmModal(content: any, userToDelete: User) {
    this.modalService.open(content)
      .result.then(
        (result) => {
          this.userService.deleteUser(userToDelete.id)
            .subscribe(() => {
              let index = this.users.findIndex(user => user.id == userToDelete.id);
              this.users.splice(index, 1);
            });
        },
        (reason) => {
          //alert(`failure: ${reason}`)
          // do nothing if cancel
        })
  }
  onConfirmDelete(userToDelete: User) {

    if (confirm(`are you sure you want to delete ${userToDelete.name}?`)) {
      this.userService.deleteUser(userToDelete.id)
        .subscribe(() => {
          let index = this.users.findIndex(user => user.id == userToDelete.id);
          this.users.splice(index, 1);
        });
    }
  }

}
