import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as Calendar from '../actions/calendar.actions';
import { CustomDateFormatter } from '../services/custom-date-formater';
import * as fromTransports from '../reducers';
import { Store } from '@ngrx/store';
import { CalendarOptions } from '../models/calendar-options';

@Injectable()
export class CalendarEffects {
  private calOptions$ = this.store.select(fromTransports.getCalendarOptions);

  @Effect()
  viewChange$ = this.actions$
                    .ofType(Calendar.CHANGE_CALENDAR_VIEW)
                    .map(toPayload)
                    .withLatestFrom(this.calOptions$, (newViewType, options) => ({newViewType, options}))
                    .switchMap(params => {
                      return this.dateFormatter.transformDate(params.newViewType, params.options.viewDate);
                    }, (outer, inner) => {
                      const title = outer.newViewType === 'day' ?
                        'Daily view' : outer.newViewType === 'month' ?
                          'Monthly view' : 'Weekly view';
                      return {
                        title: title,
                        subTitle: inner,
                        viewType: outer.newViewType,
                      };
                    })
                    .map(options => new Calendar.ChangeCalendarViewActionCompleted(options));

  @Effect()
  locale$ = this.actions$
                .ofType(Calendar.CHANGE_VIEW_DATE)
                .map(toPayload)
                .withLatestFrom(this.calOptions$,
                  (change, options) => ({change, options}))
                .switchMap(params => {
                  return this.dateFormatter
                             .moveDate(params.change,
                               params.options.viewType,
                               params.options.viewDate)
                             .mergeMap(newDate => this.dateFormatter
                                                      .transformDate(params
                                                        .options.viewType, newDate),
                               (newDate, newSubtitle) => {
                                 return {
                                   subTitle: newSubtitle,
                                   viewDate: newDate,
                                 };
                             })
                    .map((options: CalendarOptions) => new Calendar
                      .ChangeViewDateCompleted(options));
                });

  constructor(private actions$: Actions,
              private dateFormatter: CustomDateFormatter,
              private store: Store<fromTransports.State>) {
  }
}
