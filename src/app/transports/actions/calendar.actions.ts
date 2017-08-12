import { Action } from '@ngrx/store';
export const CHANGE_VIEW_DATE = '[Transports:Layout] Change View Date';
export const CHANGE_VIEW_DATE_COMPLETED = '[Transports:Layout] Change View Date Completed';
export const CHANGE_CALENDAR_VIEW = '[Transports:Layout] Change Calendar View';
export const CHANGE_CALENDAR_VIEW_COMPLETED = '[Transports:Layout] Change Calendar View COMPLETED';
export const ADD_TRANSPORT = '[Transports:Layout] Add New Transport';
export const EDIT_TRANSPORT = '[Transports:Layout] Edit Transport';

export class ChangeViewDateAction implements Action {
  readonly type = CHANGE_VIEW_DATE;

  constructor(public payload: string) { }
}

export class ChangeViewDateCompleted implements Action {
  readonly type = CHANGE_VIEW_DATE_COMPLETED;

  constructor(public payload: any) {}
}

export class ChangeCalendarViewAction implements Action {
  readonly type = CHANGE_CALENDAR_VIEW;

  constructor(public payload: string) { }
}

export class ChangeCalendarViewActionCompleted implements Action {
  readonly type = CHANGE_CALENDAR_VIEW_COMPLETED;

  constructor(public payload: any) { }
}

export class AddTransportAction implements Action {
  readonly type = ADD_TRANSPORT;

  constructor() { }
}

export class EditTransportAction implements Action {
  readonly type = EDIT_TRANSPORT;

  constructor(public payload: string) { }
}

export type Actions =
  ChangeViewDateAction
  | ChangeViewDateCompleted
  | ChangeCalendarViewAction
  | ChangeCalendarViewActionCompleted
  | AddTransportAction
  | EditTransportAction;

