import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user',
  template: `
    <div *ngIf="editing; else displayMode">
      <h2>Edit</h2>
      Id: {{ user.id }}<br>
      Name: <input [(ngModel)]="editingUser.name"><br>
      Email: <input [(ngModel)]="editingUser.email"><br>
      Active: <input type="checkbox" [(ngModel)]="editingUser.active">
    </div>

    <ng-template #displayMode>
      <div>
        <h2>Display</h2>
        Id: {{ user.id }}<br>
        Name: {{ user.name }}<br>
        Email: {{ user.email }}<br>
        {{ user.active ? "Active" : "Inactive" }}
      </div>
    </ng-template>
    <button (click)="onDelete()" *ngIf="!editing">Delete</button>
    <button (click)="onEdit()" *ngIf="!editing">Edit</button>
    <button (click)="onSave()" *ngIf="editing">Save</button>
    <button (click)="onCancel()" *ngIf="editing">Cancel</button>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  editing = false;
  @Input() user = new User();
  @Output() changeUser = new EventEmitter();
  @Output() deleteUser = new EventEmitter();

  editingUser = new User();

  constructor() { }

  ngOnInit(): void {
  }
  onEdit() {
    this.editingUser = new User(this.user.id, 
                                this.user.name, 
                                this.user.email, 
                                this.user.active);
    this.editing = true;
  }
  onSave() {
    // modifying the outside object is not ideal (side-effect)
    //this.user.name = this.editingUser.name;
    //this.user.email = this.editingUser.email;
    //this.user.active = this.editingUser.active;

    // generate an event instead:
    this.changeUser.emit(this.editingUser);

    this.editing = false;
  }
  onCancel() {
    this.editing = false;
  }
  onDelete() {
    if (confirm("Are you sure?")) {
      this.deleteUser.emit(this.user.id);
    }
  }
}
