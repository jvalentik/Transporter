import * as map from '../actions/map.actions';
import { AgmPosition } from '../models/agm-position';

export interface State {
  position: AgmPosition;
  zoom: number;
  markers: AgmPosition[];
}

const initialPosition: AgmPosition = {
  latitude: 48.4372781,
  longitude: 19.0687613
};

export const initialState: State = {
  position: initialPosition,
  zoom: 4,
  markers: []
};

export function reducer(state: State = initialState, action: map.Actions): State {
  switch (action.type) {
    case map.SET_POSITION:
      const position = action.payload;
      return Object.assign({}, state, {
        position,
      });
    case map.SET_ZOOM:
      const zoom = action.payload;
      return Object.assign({}, state, {
        zoom,
      });
    case map.ADD_MARKER:
      const markerPosition = action.payload;
      return Object.assign({}, state, {
        markers: [...state.markers, markerPosition],
      });
    default:
      return state;
  }
}

export const getPosition = (state: State) => state.position;
export const getZoom = (state: State) => state.zoom;
export const getMarkers = (state: State) => state.markers;
