import * as fromRoot from '../../reducers';
import * as User from '../actions/user.actions';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AuthenticationService } from '../../core/services/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserEffects {
  private authState: firebase.User;

  @Effect()
  login$ = this.actions$
               .ofType(User.LOGIN)
               .switchMap(() => Observable.fromPromise(this.authService.login()))
               .map(() => new User.LoginSuccessAction(this.authState));

  @Effect()
  logoff$ = this.actions$
                .ofType(User.LOG_OFF)
                .switchMap(() => Observable.fromPromise(this.authService.logout()))
                .map(() => new User.LogOffSuccessAction());

  constructor(private actions$: Actions,
              private af: AngularFireAuth,
              private authService: AuthenticationService) {
    this.af.authState.subscribe(user => this.authState = user);
  }
}
