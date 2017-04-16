import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { getISOWeek } from 'date-fns';
import { TranslateService } from '@ngx-translate/core';

export class CustomDateFormatter extends CalendarDateFormatter {
  locale: string;

  constructor(private translateService: TranslateService) {
    super();
    this.locale = this.translateService.getBrowserCultureLang().split('-')[0];
  }

  public weekViewTitle({date, locale}: DateFormatterParams): string {
    const year: string = new Intl.DateTimeFormat(locale,
      {year: 'numeric'}).format(date);
    const weekNumber: number = getISOWeek(date);
    return `${this.translateService
                  .get('mainViewLabels.weekViewTitle')[0]}
                   ${weekNumber}
                   ${this.translateService
                         .get('mainViewLabels.weekViewTitle')[1]} ${year}`;
  }
}
