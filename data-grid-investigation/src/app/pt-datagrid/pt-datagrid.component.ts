import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Record } from '../record.model';

@Component({
  selector: 'pt-datagrid',
  template: `
    <table>
      <tbody>
        <tr *ngFor="let key of keys">
          <td>{{ key }}</td>
          <td>{{ results[key]}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./pt-datagrid.component.css']
})
export class PtDatagridComponent implements OnInit, OnChanges {

  @Input() records: Record[] = [];
  @Input() field: string = "colour";

  results:any[] = [];
  keys:any[] = [];

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.analyseData();
  }

  ngOnInit(): void {
    console.log("ngOnInit() called");
  }

  analyseData() {
    this.results = this.records.reduce((totals:any, record:any) => {
      if (totals[record[this.field]] == null) {
        // this is the first record for this colour
        totals[record[this.field]] = record.quantity;
      } else {
        // there is already a record for this colour
        totals[record[this.field]] += record.quantity;
      }
      return totals;
    }, {});

    this.keys = Object.keys(this.results);
  }

  analyseDataToUninitialisedObject() {
    this.results = this.records.reduce((totals:any, record:Record) => {
      if (totals[record.colour] == null) {
        // this is the first record for this colour
        totals[record.colour] = record.quantity;
      } else {
        // there is already a record for this colour
        totals[record.colour] += record.quantity;
      }
      return totals;
    }, {});

    this.keys = Object.keys(this.results);


    //console.log(result);
  }

  analyseDataResultToObject() {

    let result = this.records.reduce((totals:any , record:Record)=> {

      //totals.red += 10;   // use dot notation to access field in obj
      //totals["red"] += 10; // use array notation to access fiel in obj

      totals[record.colour] += record.quantity;

      return totals;
    }, {
      pink:0, 
      red: 0, 
      green: 0, 
      blue: 0, 
      orange: 0
    });

    console.log(result);
  }


  analyseDataDistinctColoursFromRecords() {

    let colours = this.records.reduce(
      (uniqueList:string[], record:Record) => {

        console.log(record);
      if (uniqueList.indexOf(record.colour) == -1) {
        uniqueList.push(record.colour);
      }
      return uniqueList;
    }, []);

    console.log(colours);


  }



  analyseDataDistinctList() {

    // get distinct (unique) list 
    let data = ["one", "one", "two", "one", "four", "three", "one", "two"]

    let result = data.reduce((uniqueList:string[], item:string) => {
      //console.log(uniqueList);
      //console.log(item);
      if (uniqueList.indexOf(item) == -1) {
        uniqueList.push(item);
      }
      return uniqueList;
      
    }, []);
    console.log(result);
  }


  analyseDataSum() {
    // sum the data
    let result = [1,2,3].reduce((prev, current)=> {
      console.log(`prev:${prev}, current:${current} : ${ prev + current }`);

      // return the new total
      return prev + current;
    }, 0);

    console.log(`result: ${result}`);
  }

}
