import { Action } from '@ngrx/store';
import { Trip } from '../../../model/trip';
import { TripActions } from '../actions/trip.actions';
/**
 * Created by johny on 26/04/2017.
 */
export const trips = (state: any = [], action: Action): Array<Trip> => {
  switch (action.type) {
    case TripActions.LOAD_TRIPS_SUCCESS:
      return action.payload;
    case TripActions.ADD_TRIP_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const tripSaveStatus = (state: any = 'NONE', action: Action): string => {
  switch (action.type) {
    case TripActions.ADD_TRIP:
      return 'IN PROGRESS';
    case TripActions.ADD_TRIP_SUCCESS:
      return 'SUCCESS';
    default:
      return state;
  }
};
