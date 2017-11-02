import * as fromCalendar from './calendar.reducer';
import * as fromRoot from '../../reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CalendarOptions } from '../models/calendar-options';

export interface TransportsState {
  calendar: fromCalendar.State;
}

export interface State extends fromRoot.State {
  transports: TransportsState;
}

export const reducers = {
  calendar: fromCalendar.reducer
};

export const getTransportsState = createFeatureSelector<TransportsState>('transports');

export const getTransportCalendarState
  = createSelector(getTransportsState, (state: TransportsState) => state.calendar);

export const getCalendarSubtitle = createSelector(getTransportCalendarState, fromCalendar.getSubtitle);
export const getCalendarTitle = createSelector(getTransportCalendarState, fromCalendar.getTitle);
export const getCalendarViewType = createSelector(getTransportCalendarState, fromCalendar.getViewType);
export const getCalendarViewDate = createSelector(getTransportCalendarState, fromCalendar.getViewDate);
export const getAllCalendarViews = createSelector(getTransportCalendarState, fromCalendar.getAllViews);

export const getCalendarOptions = createSelector(
  getCalendarTitle,
  getCalendarSubtitle,
  getCalendarViewType,
  getCalendarViewDate,
  fromRoot.getLocale,
  (title, subTitle, viewType, viewDate, locale): CalendarOptions => {
    return {
      title,
      subTitle,
      viewType,
      viewDate,
      locale
    };
  }
);




