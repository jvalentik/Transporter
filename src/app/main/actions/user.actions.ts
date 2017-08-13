import { Action } from '@ngrx/store';
import * as firebase from 'firebase/app';

export const LOG_OFF = '[User] Log Off';
export const LOG_OFF_SUCCESS = '[User] Log Off Success';
export const LOGIN = '[User] Log In';
export const LOGIN_SUCCESS = '[User] Login Success';

export class LogOffAction implements Action {
  readonly type = LOG_OFF;
}

export class LogOffSuccessAction implements Action {
  readonly type = LOG_OFF_SUCCESS;
}

export class LogInAction implements Action {
  readonly type = LOGIN;
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: firebase.User) {}
}

export type Actions =
  LogOffAction
  | LogOffSuccessAction
  | LogInAction
  | LoginSuccessAction;
