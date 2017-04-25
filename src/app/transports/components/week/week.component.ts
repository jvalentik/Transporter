import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
  viewDate: Date;
  view = 'week';
  locale: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.viewDate = new Date();
    this.locale = this.translate.getBrowserCultureLang().split('-')[0];
  }
}
