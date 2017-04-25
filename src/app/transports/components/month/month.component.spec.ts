import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthComponent } from './month.component';
import { TestingHelperModule } from '../../../../testing/testing-helper.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MothComponent', () => {
  let component: MonthComponent;
  let fixture: ComponentFixture<MonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     imports: [
       TestingHelperModule
     ],
     schemas: [
       NO_ERRORS_SCHEMA
     ],
      declarations: [ MonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
