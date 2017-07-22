import { Action } from '@ngrx/store';

export const OPEN_SIDENAV = '[Layout] Open Sidenav';
export const CLOSE_SIDENAV = '[Layout] Close Sidenav';
export const SET_SIDENAV_MODE = '[Layout] Set Sidenav Mode';
export const RESIZE_WINDOW = '[Layout] Resize Window';

export class OpenSidenavAction implements Action {
  readonly type = OPEN_SIDENAV;

  constructor() { }
}

export class CloseSideNavAction implements Action {
  readonly type = CLOSE_SIDENAV;

  constructor() { }
}

export class SetSidenavModeAction implements Action {
  readonly type = SET_SIDENAV_MODE;

  constructor(public payload: string) { }
}

export class ResizeWindowAction implements Action {
  readonly type = RESIZE_WINDOW;

  constructor(public payload: Object) {}
}

export type Actions =
  | OpenSidenavAction
  | CloseSideNavAction
  | SetSidenavModeAction
  | ResizeWindowAction;
