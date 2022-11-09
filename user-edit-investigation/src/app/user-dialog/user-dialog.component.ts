import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user-dialog',
  template: `
    <div class="modal-bg">
      <div class="modal-content">
        <h2>{{ title }}</h2>
        Id: {{ user.id }}<br>
        Name: <input [(ngModel)]="editingUser.name"><br>
        Email: <input [(ngModel)]="editingUser.email"><br>
        Active: <input type="checkbox" [(ngModel)]="editingUser.active">
        <hr>
        <button (click)="onSave()">Save</button>
        <button (click)="onCancel()">Cancel</button>
      </div>
  </div>
  `,
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  @Input() title = "User Dialog";
  @Input() user: User = new User();
  @Output() close = new EventEmitter();
  @Output() save = new EventEmitter();

  editingUser = new User();
  
  constructor() { }
  ngOnInit(): void {
    this.editingUser = new User(
                          this.user.id, 
                          this.user.name, 
                          this.user.email, 
                          this.user.active);
  }
  onSave() {
    this.save.emit(this.editingUser);
  }
  onCancel() {
    this.close.emit();
  }

}
