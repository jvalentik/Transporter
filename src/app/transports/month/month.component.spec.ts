import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MothComponent } from './month.component';

describe('MothComponent', () => {
  let component: MothComponent;
  let fixture: ComponentFixture<MothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
