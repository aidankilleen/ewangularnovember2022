import { TestBed } from '@angular/core/testing';

import { RecordHttpService } from './record-http.service';

describe('RecordHttpService', () => {
  let service: RecordHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
