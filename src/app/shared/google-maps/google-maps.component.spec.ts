import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsComponent } from './google-maps.component';
import { By } from '@angular/platform-browser';
import { logging } from 'selenium-webdriver';
import Type = logging.Type;
import { DebugElement } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

describe('GoogleMapsComponent', () => {
  let component: GoogleMapsComponent;
  let fixture: ComponentFixture<GoogleMapsComponent>;
  let sebmGmapsEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgmCoreModule.forRoot({apiKey: 'AIzaSyDJPy9QSmoRCYuka1LtxvXQiMm7KOcjFfM'})
      ],
      declarations: [
        GoogleMapsComponent
      ]
    })
    .compileComponents();
    fixture  = TestBed.createComponent(GoogleMapsComponent);
    component = fixture.debugElement.componentInstance;
    sebmGmapsEl = fixture.debugElement.query(By.css('sebm-google-map'));
    component.latitude = 51.678418;
    component.longitude = 7.809007;
    fixture.detectChanges();
  }));

  it('should create the MAp Component', () => {
    expect(component).toBeTruthy();
  });
});
