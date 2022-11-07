import { Component, Input, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'message',
  template: `
    <div 
      [ngStyle]="{'background-color': read ? 'lightgray': 'lightgreen'}"
      [ngClass]="{'starred': starred}"
    >
      <h2>{{ message.title }}{{ starred ? '*' : '' }}</h2>
      <p *ngIf="!read">{{ message.text }}</p>
      <button (click)="read = !read">{{ read ? "Show" : "Hide" }}</button>
      <button (click)="starred = !starred">{{ starred ? "Unstar" : "Star" }}</button>
      <hr>
      {{ starred }}
    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() public message = new Message("", "");
  public read: boolean = false;
  public starred: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
