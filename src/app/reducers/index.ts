import * as fromLayout from '../main/reducers/layout.reducer';
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return function (state: State, action: any): State {
    console.log(`state: ${JSON.stringify(state)}`);
    console.log(`action: ${JSON.stringify(action)}`);
    return reducer(state, action);
  }
}

export const metaReducers: ActionReducer<any, any>[] =
  !environment.production ? [logger] : [];

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
export const getSidenavMode = createSelector(getLayoutState, fromLayout.getSidenavMode);
export const getWindowWidth = createSelector(getLayoutState, fromLayout.getWindowWidth);
export const getWindowHeight = createSelector(getLayoutState, fromLayout.getWindowHeight);
