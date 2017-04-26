import { Action } from '@ngrx/store';
import { Vehicle } from '../../../model/vehicle';
import { VehicleActions } from '../actions/vehicle.actions';
/**
 * Created by johny on 26/04/2017.
 */

export const vehicles = (state: any = [], action: Action): Array<Vehicle> => {
  switch (action.type) {
    case VehicleActions.LOAD_VEHICLES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const vehiclesDictionary =
  (state: any = {}, action: Action): {[key: number]: Vehicle } => {
  switch (action.type) {
    case VehicleActions.LOAD_VEHICLES_SUCCESS:
      const vehicleList: Array<Vehicle> = action.payload;
      const vehicleDict: {[key: number]: Vehicle} = {};
      vehicleList.forEach(vehicle => {
        vehicleDict[vehicle['$key']] = vehicle;
      });
      return vehicleDict;
    default:
      return state;
  }
};
