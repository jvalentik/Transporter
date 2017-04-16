import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppMaterialModule } from '../app-material/app-material.module';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  const routerEvents: Observable<string> = Observable.create((observer) => {
    observer.next('test');
    observer.complete();
  });
  let routerStub: any;
  beforeEach(async(() => {
    routerStub = {
      events: routerEvents,
    };
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
          }
        })
      ],
      declarations: [
        SidenavComponent
      ],
     providers: [
       {
         provide: Router,
         useValue: routerStub
       }
     ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
