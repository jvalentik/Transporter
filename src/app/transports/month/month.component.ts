import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-month',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {
  viewDate: Date;
  view = 'month';
  locale: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.viewDate = new Date();
    this.locale = this.translate.getBrowserCultureLang().split('-')[0];
  }

}
