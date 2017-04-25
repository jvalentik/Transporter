import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { translateServiceStub } from '../../../testing/service-stubs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let translateService: TranslateService;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: TranslateService,
          useValue: translateServiceStub
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents()
     .then(() => {
       fixture = TestBed.createComponent(AppComponent);
       component = fixture.debugElement.componentInstance;
       translateService = TestBed.get(TranslateService);
       de = fixture.debugElement.query(By.css('app-root'));
       el = fixture.debugElement.nativeElement;
       fixture.detectChanges();
     });
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render contain toolbar', async(() => {
    expect(el.querySelector('app-toolbar')).toBeTruthy();
  }));

  it('should set language to English', async(() => {
    const currentLanguage = translateService.currentLang;
    expect(currentLanguage).toEqual('en');
  }));
});
