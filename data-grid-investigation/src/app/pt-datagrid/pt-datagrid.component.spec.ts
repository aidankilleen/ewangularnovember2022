import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtDatagridComponent } from './pt-datagrid.component';

describe('PtDatagridComponent', () => {
  let component: PtDatagridComponent;
  let fixture: ComponentFixture<PtDatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtDatagridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
