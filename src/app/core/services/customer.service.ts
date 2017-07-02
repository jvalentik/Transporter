/**
 * Created by johny on 26/04/2017.
 */
import { Injectable } from '@angular/core';
import { AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import { Customer } from '../../model/customer';

@Injectable()
export class CustomerService {

  constructor(private db: AngularFireDatabase) {}

  getCustomers(): FirebaseListObservable<Array<Customer>> {
    return this.db.list('/customers');
  }
}
