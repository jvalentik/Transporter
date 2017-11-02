import { Component, OnInit } from '@angular/core';
import * as fromTransports from '../../reducers';
import * as fromRoot from '../../../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CalendarOptions } from '../../models/calendar-options';
import { ChangeCalendarViewAction, ChangeViewDateAction } from '../../actions/calendar.actions';

@Component({
  selector: 'app-transports',
  templateUrl: './transports-page.component.html',
  styleUrls: ['./transports-page.component.scss']
})
export class TransportsPageComponent implements OnInit {
  async: any;
  calendarOptions: Observable<CalendarOptions>;
  allCalendarViews: Observable<Array<string>>;
  locale: Observable<string>;

  constructor(private store: Store<fromTransports.State>) { }

  ngOnInit() {
    this.calendarOptions = this.store.select(fromTransports.getCalendarOptions);
    this.allCalendarViews = this.store.select(fromTransports.getAllCalendarViews);
    this.locale = this.store.select(fromRoot.getLocale);
    this.store.dispatch(new ChangeViewDateAction('today'));
  }

  onViewDateChanged(change: string): void {
    this.store.dispatch(new ChangeViewDateAction(change));
  }

  onViewChanged(newViewType: string): void {
    this.store.dispatch(new ChangeCalendarViewAction(newViewType));
  }

}
