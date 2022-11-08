import { Component } from '@angular/core';
import { AccordionItem } from './accordion/accordion-item.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Accordion Investigation</h1>


    {{ price | currency:'EUR' }}<br>
    {{ today | date:'YYYY-MM-dd' }}<br>




    <h2>Normal H2</h2>

    <accordion [items]="items"></accordion>
    <accordion [items]="newsItems"></accordion>
<!--
    <hr>
    {{ items | json }}--> 
    <!-- #1 debugging tip!!! -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accordion-investigation';

  price = 22/7;
  today = new Date();

  items = [
    new AccordionItem("Item 1", "This is item 1", true), 
    new AccordionItem("Item 2", "This is item 2", false), 
    new AccordionItem("Item 3", "This is item 3", false), 
    new AccordionItem("Item 4", "This is item 4", false)
  ];

  newsItems = [
    new AccordionItem("News Item 1", "This is news item 1", true), 
    new AccordionItem("News Item 2", "This is news item 2", false), 
    new AccordionItem("News Item 3", "This is news item 3", false), 
    new AccordionItem("News Item 4", "This is news item 4", false), 
    new AccordionItem("News Item 5", "This is news item 5", false)
  ]
}
