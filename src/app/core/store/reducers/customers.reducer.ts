import { Action } from '@ngrx/store';
import { Customer } from '../../../model/customer';
import { CustomerActions } from '../actions/customer.actions';
/**
 * Created by johny on 26/04/2017.
 */
export const customers = (state: any = [], action: Action): Array<Customer> => {
  switch (action.type) {
    case CustomerActions.LOAD_CUSTOMERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
