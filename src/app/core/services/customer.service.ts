/**
 * Created by johny on 26/04/2017.
 */
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../model/customer';

@Injectable()
export class CustomerService {

  constructor(private af: AngularFire) {}

  getCustomers(): Observable<Customer[]> {
    return this.af.database.list('/customers');
  }
}
