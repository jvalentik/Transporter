import * as fromLayout from '../main/reducers/layout.reducer';
import * as fromUser from '../main/reducers/user.reducer';
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  layout: fromLayout.State;
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  user: fromUser.reducer,
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
export const getUserState = createFeatureSelector<fromUser.State>('user');

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
export const getSidenavMode = createSelector(getLayoutState, fromLayout.getSidenavMode);
export const getWindowWidth = createSelector(getLayoutState, fromLayout.getWindowWidth);
export const getWindowHeight = createSelector(getLayoutState, fromLayout.getWindowHeight);
export const getViewList = createSelector(getLayoutState, fromLayout.getViewList);
export const getLocale = createSelector(getLayoutState, fromLayout.getLocale);
export const getLoggedInUser = createSelector(getUserState, fromUser.getLoggedInUser);
export const isLoggedIn = createSelector(getUserState, fromUser.isLoggedIn);
