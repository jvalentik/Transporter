import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeaderComponent } from './view-header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CapitalsPipe } from '../capitals.pipe';

describe('ViewHeaderComponent', () => {
  let component: ViewHeaderComponent;
  let fixture: ComponentFixture<ViewHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHeaderComponent, CapitalsPipe ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
