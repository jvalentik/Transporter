/**
 * Created by johny on 25/04/2017.
 */
import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import * as dateFn from 'date-fns';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomDateFormatter extends CalendarDateFormatter {

  constructor(private translateService: TranslateService) {
    super();
  }

  public transformDate(view: string, date: Date, locale: string): Observable<string> {
    return of(this[`${view}ViewTitle`]({date, locale: locale}));
  }

  public moveDate(change: string, viewType: string, date: Date): Observable<Date> {
    switch (change) {
      case 'today':
        return of(dateFn.startOfToday());
      case 'previous':
        const subFn: any = {
          day: dateFn.subDays,
          week: dateFn.subWeeks,
          month: dateFn.subMonths
        }[viewType];
        return of(subFn(date, 1));
      case 'next':
        const addFn: any = {
          day: dateFn.addDays,
          week: dateFn.addWeeks,
          month: dateFn.addMonths
        }[viewType];
        return of(addFn(date, 1));
    }
  }

  public weekViewTitle({date, locale}: DateFormatterParams): string {
    const year: string = new Intl.DateTimeFormat(locale,
      {year: 'numeric'}).format(date);
    const weekNumber: number = dateFn.getISOWeek(date);
    return `${this.translateService
                  .instant('calendarHeader.weekViewTitle')[0]}
                   ${weekNumber}
                   ${this.translateService
                         .instant('calendarHeader.weekViewTitle')[1]} ${year}`;
  }
}
