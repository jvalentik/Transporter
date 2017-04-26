import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import { Trip } from '../../../model';

@Injectable()
export class TripActions {

  static LOAD_TRIPS = 'LOAD_TRIPS';
  loadTrips(): Action {
    return {
      type: TripActions.LOAD_TRIPS
    };
  }

  static LOAD_TRIPS_SUCCESS = 'LOAD_TRIPS_SUCCESS';
  loadTripsSuccess(trips: Trip[]): Action {
    return {
      type: TripActions.LOAD_TRIPS_SUCCESS,
      payload: trips
    };
  }

  static ADD_TRIP = 'ADD_TRIP';
  addTrip(trip: Trip): Action {
    return {
      type: TripActions.ADD_TRIP,
      payload: trip
    };
  }

  static ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS';
  addTripSuccess(): Action {
    return {
      type: TripActions.ADD_TRIP_SUCCESS,
      payload: null
    };
  }
}
