import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.model';

@Component({
  selector: 'accordion-panel',
  template: `
    <div (click)="onClick()">
      <h2>{{ item.title }}</h2>
      <p *ngIf="item.expanded">{{ item.content}}</p>
    </div>
  `,
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent implements OnInit {

  @Input() item:AccordionItem = new AccordionItem("", "");
  constructor() { }

  onClick() {
    this.item.expanded = !this.item.expanded;
  }

  ngOnInit(): void {
  }

}
