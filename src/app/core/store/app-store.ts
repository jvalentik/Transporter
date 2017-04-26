import * as model from '../../model';
import * as reducer from './reducers';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

/**
 * Created by johny on 26/04/2017.
 */

export interface AppStore {
  vehicles: Array<model.Vehicle>;
  vehiclesDictionary: {[key: number]: model.Vehicle};
  drivers: Array<model.Driver>;
  driversDictionary: {[key: number]: model.Driver};
  customers: Array<model.Customer>;
  trips: Array<model.Trip>;
  tripSaveStatus: string;
}

export default compose(combineReducers) ({
  vehicles: reducer.vehicles,
  vehiclesDictionary: reducer.vehiclesDictionary,
  customers: reducer.customers,
  driversDictionary: reducer.driversDictionary,
  drivers: reducer.drivers,
  trips: reducer.trips,
  tripSaveStatus: reducer.tripSaveStatus
});
