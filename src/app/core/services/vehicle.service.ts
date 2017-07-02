/**
 * Created by johny on 26/04/2017.
 */
/**
 * Created by johny on 26/04/2017.
 */
import { Injectable } from '@angular/core';
import { Vehicle } from '../../model/vehicle';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class VehicleService {

  constructor(private db: AngularFireDatabase) {
  }

  getVehicles(): FirebaseListObservable<Array<Vehicle>> {
    return this.db.list('/vehicles');
  }

}
