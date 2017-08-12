import { Action } from '@ngrx/store';
import { AgmPosition } from '../models/agm-position';

export const SET_POSITION = '[Map] Set AgmPosition';
export const SET_ZOOM = '[Map] Set Zoom';
export const ADD_MARKER = '[Map] Add Marker';

export class SetPositionAction implements Action {
  readonly type = SET_POSITION;

  constructor(public payload: AgmPosition) {}
}

export class SetZoomAction implements Action {
  readonly type = SET_ZOOM;

  constructor(public payload: number) {}
}

export class AddMarkerAction implements Action {
  readonly type = ADD_MARKER;

  constructor(public payload: AgmPosition) {}
}

export type Actions =
  | SetPositionAction
  | SetZoomAction
  | AddMarkerAction;
