/**
 * Created by johny on 26/04/2017.
 */
/**
 * Created by johny on 26/04/2017.
 */
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../../model/vehicle';

@Injectable()
export class VehicleService {

  constructor(private af: AngularFire) {
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.af.database.list('/vehicles');
  }

}
