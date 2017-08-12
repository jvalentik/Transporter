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
  locale: string;

  constructor(private translateService: TranslateService) {
    super();
    this.locale = this.translateService.getBrowserCultureLang().split('-')[0];
  }

  public transformDate(view: string, date: Date): Observable<string> {
    return of(this[`${view}ViewTitle`]({date, locale: this.locale}));
  }

  public moveDate(change: string, viewThype: string, date: Date): Observable<Date> {
    switch (change) {
      case 'today':
        return of(dateFn.startOfToday());
      case 'previous':
        const subFn: any = {
          day: dateFn.subDays,
          week: dateFn.subWeeks,
          month: dateFn.subMonths
        }[viewThype];
        return of(subFn(date, 1));
      case 'next':
        const addFn: any = {
          day: dateFn.addDays,
          week: dateFn.addWeeks,
          month: dateFn.addMonths
        }[viewThype];
        return of(addFn(date, 1));
    }
  }

  public weekViewTitle({date, locale}: DateFormatterParams): string {
    const year: string = new Intl.DateTimeFormat(locale,
      {year: 'numeric'}).format(date);
    const weekNumber: number = dateFn.getISOWeek(date);
    return `${this.translateService
                  .instant('mainViewLabels.weekViewTitle')[0]}
                   ${weekNumber}
                   ${this.translateService
                         .instant('mainViewLabels.weekViewTitle')[1]} ${year}`;
  }
}
