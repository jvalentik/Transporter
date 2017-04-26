import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Customer} from '../../../model';

@Injectable()
export class CustomerActions {

  static LOAD_CUSTOMERS = 'LOAD_CUSTOMERS';
  loadCustomers(): Action {
    return {
      type: CustomerActions.LOAD_CUSTOMERS
    };
  }

  static LOAD_CUSTOMERS_SUCCESS = 'LOAD_CUSTOMERS_SUCCESS';
  loadCustmersSuccess(customers: Customer[]): Action {
    return {
      type: CustomerActions.LOAD_CUSTOMERS_SUCCESS,
      payload: customers
    };
  }
}
