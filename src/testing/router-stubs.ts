/**
 * Created by johny on 16/04/2017.
 */

// export for convenience.
// tslint:disable:directive-selector use-host-property-decorator component-selector no-input-rename
import { Observable } from 'rxjs/Observable';
export { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';

import {
  Component,
  Directive,
  Injectable,
  Input
} from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

@Component({
  selector: 'router-outlet'
  , template: ''
})
export class RouterOutletStubComponent { }

@Injectable()
export class RouterStub {
  events = Observable.create((observer) => {
    observer.next('test');
    observer.complete();
  });
  navigate(commands: any[], extras?: NavigationExtras) { }
}


// Only implements params and part of snapshot.params
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return { params: this.testParams };
  }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
