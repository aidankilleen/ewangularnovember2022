import { Component, OnInit } from '@angular/core';
import { RecordHttpService } from './record-http.service';
import { Record } from './record.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <pt-datagrid [records]="records" field="name">

    </pt-datagrid>

    <hr>
    

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  records:Record[] = [];

  constructor(private recordHttpService: RecordHttpService) {
  }
  ngOnInit(): void {
    this.recordHttpService.getRecords()
      .subscribe((records:Record[])=> {
        this.records = records;
      });

  }
  title = 'data grid investigation';
}
