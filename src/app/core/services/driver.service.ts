/**
 * Created by johny on 26/04/2017.
 */
/**
 * Created by johny on 26/04/2017.
 */
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Driver } from '../../model/driver';

@Injectable()
export class DriverService {

  constructor(private db: AngularFireDatabase) {
  }

  getDrivers(): FirebaseListObservable<Array<Driver>> {
    return this.db.list('/drivers');
  }

}
