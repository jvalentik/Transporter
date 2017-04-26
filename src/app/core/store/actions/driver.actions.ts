import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import { Driver } from '../../../model';

@Injectable()
export class DriverActions {

  static LOAD_DRIVERS = 'LOAD_DRIVERS';
  loadDrivers(): Action {
    return {
      type: DriverActions.LOAD_DRIVERS
    };
  }

  static LOAD_DRIVERS_SUCCESS = 'LOAD_DRIVERS_SUCCESS';
  loadDriversSuccess(drivers: Driver[]): Action {
    return {
      type: DriverActions.LOAD_DRIVERS_SUCCESS,
      payload: drivers
    };
  }
}
