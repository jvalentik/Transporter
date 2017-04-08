import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let translateServiceStub: any;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let translateService: TranslateService;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    translateServiceStub = {
      currentLang: '',
      addLangs: function(array: Array<string>) { },
      setDefaultLang: function(lang: string) { this.currentLang = lang; },
      use: function(lang: string) { this.currentLang = lang; }
    };
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: TranslateService,
          useValue: translateServiceStub
        },
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

  it(`should have as title 'App works!'`, async(() => {
    expect(component.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    expect(el.querySelector('h1').textContent).toContain('app works!');
  }));

  it('should set language to English', async(() => {
    const currentLanguage = translateService.currentLang;
    expect(currentLanguage).toEqual('en');
  }));
});
