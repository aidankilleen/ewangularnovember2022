import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from './record.model';

@Injectable({
  providedIn: 'root'
})
export class RecordHttpService {

  url = "http://localhost:3000/records";

  constructor(private httpClient: HttpClient) { 
  }

  getRecords(): Observable<Record[]> {
    return this.httpClient.get<Record[]>(this.url);
  }
}
