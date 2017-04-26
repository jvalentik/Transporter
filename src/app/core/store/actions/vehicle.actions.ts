import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Vehicle} from '../../../model';

@Injectable()
export class VehicleActions {

  static LOAD_VEHICLES = 'LOAD_VEHICLES';
  loadVehicles(): Action {
    return {
      type: VehicleActions.LOAD_VEHICLES
    };
  }

  static LOAD_VEHICLES_SUCCESS = 'LOAD_VEHICLES_SUCCESS';
  loadVehiclesSuccess(vehicles: Vehicle[]): Action {
    return {
      type: VehicleActions.LOAD_VEHICLES_SUCCESS,
      payload: vehicles
    };
  }
}
