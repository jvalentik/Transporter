import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {CustomerActions} from '../actions';
import {Customer} from '../../../model';
import {CustomerService} from '../../services';

@Injectable()
export class CustomerEffects {

  @Effect()
  loadCustomers$ = this.actions$
      .ofType(CustomerActions.LOAD_CUSTOMERS)
      .switchMap(() => this.svc.getCustomers())
      .map((categories: Customer[]) => this.categoryActions
                                           .loadCustmersSuccess(categories));

  constructor (
    private actions$: Actions,
    private categoryActions: CustomerActions,
    private svc: CustomerService
  ) {}
}
