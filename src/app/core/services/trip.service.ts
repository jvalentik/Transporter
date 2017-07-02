/**
 * Created by johny on 26/04/2017.
 */
/**
 * Created by johny on 26/04/2017.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Trip } from '../../model/trip';
import { AppStore } from '../store/app-store';
import { Store } from '@ngrx/store';
import { TripActions } from '../store/actions/trip.actions';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TripService {

  constructor(private db: AngularFireDatabase,
              private store: Store<AppStore>,
              private tripActions: TripActions) {
  }

  getTrips(): FirebaseListObservable<Array<Trip>> {
    return this.db.list('/trips');
  }

  saveTrip(trip: Trip) {
    this.db.list('/trips').push(trip)
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
