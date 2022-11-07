import { Component } from '@angular/core';
import { AccordionItem } from './accordion/accordion-item.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Accordion Investigation</h1>

    <accordion [items]="items"></accordion>

    <hr>
    {{ items | json }} <!-- #1 debugging tip!!! -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accordion-investigation';

  items = [
    new AccordionItem("Item 1", "This is item 1", true), 
    new AccordionItem("Item 2", "This is item 2", false), 
    new AccordionItem("Item 3", "This is item 3", false), 
    new AccordionItem("Item 4", "This is item 4", false)
  ]
}
