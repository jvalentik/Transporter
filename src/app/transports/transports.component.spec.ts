import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportsComponent } from './transports.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TransportsComponent', () => {
  let component: TransportsComponent;
  let fixture: ComponentFixture<TransportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransportsComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
