/**
 * Created by johny on 26/04/2017.
 */
/**
 * Created by johny on 26/04/2017.
 */
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Driver } from '../../model/driver';

@Injectable()
export class DriverService {

  constructor(private af: AngularFire) {
  }

  getDrivers(): Observable<Driver[]> {
    return this.af.database.list('/drivers');
  }

}
