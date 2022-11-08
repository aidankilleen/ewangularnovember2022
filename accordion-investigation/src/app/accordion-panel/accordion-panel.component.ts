import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.model';

@Component({
  selector: 'accordion-panel',
  template: `
    <div (click)="onClick()">
      <h2 [ngStyle]="{'background-color': item.expanded ? 'lightgreen' : 'lightblue'}">
        {{ item.title | titlecase }}
      </h2>
      <p *ngIf="item.expanded">{{ item.content}}</p>
    </div>
  `,
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent implements OnInit {

  @Input() item: AccordionItem = new AccordionItem("", "");
  @Output() expanded = new EventEmitter();
  constructor() { }

  onClick() {
    this.item.expanded = !this.item.expanded;
    this.expanded.emit(this.item);
  }

  ngOnInit(): void {
  }

}
