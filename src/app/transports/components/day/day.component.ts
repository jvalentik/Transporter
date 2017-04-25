import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  viewDate: Date;
  view = 'day';
  locale: string;
  events: CalendarEvent[];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.viewDate = new Date();
    this.locale = this.translate.getBrowserCultureLang().split('-')[0];
  }
}
