import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayComponent } from './today.component';
import { TestingHelperModule } from '../../../testing/testing-helper.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodayComponent', () => {
  let component: TodayComponent;
  let fixture: ComponentFixture<TodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayComponent ],
     imports: [
       TestingHelperModule
     ],
     schemas: [
       NO_ERRORS_SCHEMA
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
