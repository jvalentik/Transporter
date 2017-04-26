/**
 * Created by johny on 26/04/2017.
 */
/**
 * Created by johny on 26/04/2017.
 */
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Trip } from '../../model/trip';
import { AppStore } from '../store/app-store';
import { Store } from '@ngrx/store';
import { TripActions } from '../store/actions/trip.actions';

@Injectable()
export class TripService {

  constructor(private af: AngularFire,
              private store: Store<AppStore>,
              private tripActions: TripActions) {
  }

  getTrips(): Observable<Trip[]> {
    return this.af.database.list('/trips');
  }

  saveTrip(trip: Trip) {
    this.af.database.list('/trips').push(trip)
        .then((ret) => {
          console.log(ret);
         this.store.dispatch(this.tripActions.addTripSuccess());
      },
      (error: Error) => {
        console.error(error);
      }
    );
  }

}
