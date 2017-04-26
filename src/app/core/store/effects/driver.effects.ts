import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {DriverActions} from '../actions';
import {Driver} from '../../../model';
import {DriverService} from '../../services';

@Injectable()
export class DriverEffects {

  @Effect()
  loadDrivers$ = this.actions$
                       .ofType(DriverActions.LOAD_DRIVERS)
                       .switchMap(() => this.svc.getDrivers())
                       .map((drivers: Driver[]) => this.driverActions.loadDriversSuccess(drivers));

  constructor (
    private actions$: Actions,
    private driverActions: DriverActions,
    private svc: DriverService
  ) {}
}
