import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from './accordion-item.model';

@Component({
  selector: 'accordion',
  template: `
    <div>
      <accordion-panel 
        *ngFor="let item of items"
        [item]="item"
        (expanded)="onExpanded($event)">
      </accordion-panel>

    </div>
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items: AccordionItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  onExpanded(expandedItem:AccordionItem) {
    this.items.forEach(item => {
      if (item != expandedItem) {
        item.expanded = false;
      }
    })
  }

}
