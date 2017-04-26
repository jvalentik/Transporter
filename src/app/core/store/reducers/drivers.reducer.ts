import { Action } from '@ngrx/store';
import { Driver } from '../../../model/driver';
import { DriverActions } from '../actions/driver.actions';
/**
 * Created by johny on 26/04/2017.
 */
export const drivers = (state: any = [], action: Action): Array<Driver> => {
  switch (action.type) {
    case DriverActions.LOAD_DRIVERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const driversDictionary =
  (state: any = {}, action: Action): {[key: number]: Driver } => {
  switch (action.type) {
    case DriverActions.LOAD_DRIVERS_SUCCESS:
      const driverList: Array<Driver> = action.payload;
      const driversDict: {[key: number]: Driver} = {};
      driverList.forEach(driver => {
        console.log('Driver key: ', driver['$key']);
        driversDict[driver['$key']] = driver;
      });
      return driversDict;
    default:
      return state;
  }
};
