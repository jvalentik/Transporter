import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { VehicleActions } from '../actions/vehicle.actions';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../../model/vehicle';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
/**
 * Created by johny on 26/04/2017.
 */

@Injectable()
export class VehicleEffects {
  @Effect()
  loadVehicles$: Observable<Action>;

  constructor (
    private actions$: Actions,
    private vehicleActions: VehicleActions,
    private svc: VehicleService
  ) {
    this.loadVehicles$ = this.actions$
      .ofType(VehicleActions.LOAD_VEHICLES)
      .switchMap(() => this.svc.getVehicles())
      .map((vehicles: Array<Vehicle>) => this.vehicleActions
                                             .loadVehiclesSuccess(vehicles));
  }
}



