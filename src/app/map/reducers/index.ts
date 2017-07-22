import * as fromMap from './map.reducer';
import * as fromRoot from '../../reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface MapState {
  status: fromMap.State
}

export interface State extends fromRoot.State {
  map: MapState;
}

export const reducers = {
  status: fromMap.reducer
};

export const getMapsState = createFeatureSelector<MapState>('map');
export const getMapStatusState =
  createSelector(getMapsState, (state: MapState) => state.status);

export const getPosition = createSelector(getMapStatusState, fromMap.getPosition);
export const getZoom = createSelector(getMapStatusState, fromMap.getZoom);
export const getMarkers = createSelector(getMapStatusState, fromMap.getMarkers);
