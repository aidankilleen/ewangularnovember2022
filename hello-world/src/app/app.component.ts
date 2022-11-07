import { Component } from '@angular/core';
import { Message } from './message/message.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>

    <ul>
      <li *ngFor="let number of numbers">
        {{ number }}
      </li>
    </ul>
    <button (click)="onAddMessage()">Add Message</button>
    <button (click)="onClear()">Clear</button>
    
    <message 
      *ngFor="let message of messages"
      [message]="message"
      >
    </message>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World Angular App';
  numbers = ["one", "two", "three", "four"];
  //messages = [
  //  { title: "Message 1", text: "This is message 1" }, 
  //  { title: "Message 2", text: "This is message 2" }
  //]

  messages = [
    new Message("M1", "This is m1"), 
    new Message("M2", "This is m2")
  ];

  onClear() {
    this.messages = [];
  }
  onAddMessage() {
    let number = this.messages.length + 1;

    let newMessage = new Message(
      `Message ${ number }`, 
      `This is mesage ${ number }`);

    this.messages.push(newMessage);
  }
}
