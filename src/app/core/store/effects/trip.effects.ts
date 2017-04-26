import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {TripActions} from '../actions';
import {Trip} from '../../../model';
import {TripService} from '../../services';

@Injectable()
export class TripEffects {

  @Effect()
  loadTrips$ = this.actions$
                       .ofType(TripActions.LOAD_TRIPS)
                       .switchMap(() => this.svc.getTrips())
                       .map((trips: Trip[]) => this.tripActions
                                                   .loadTripsSuccess(trips));
  @Effect()
  addTrip$ = this.actions$
                 .ofType(TripActions.ADD_TRIP)
                 .do((action) => this.svc.saveTrip(action.payload))
                 .filter(() => false);

  constructor (
    private actions$: Actions,
    private tripActions: TripActions,
    private svc: TripService
  ) {}
}
