import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TransportsRoutingModule } from './routing/transports-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CustomDateFormatter } from './services/custom-date-formater';
import { CalendarDateFormatter } from 'angular-calendar';
import { TransportService } from './services/transport.service';
import { TransportsComponent } from './containers/transports/transports.component';
import { DayComponent } from './components/day/day.component';
import { MonthComponent } from './components/month/month.component';
import { WeekComponent } from './components/week/week.component';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';

@NgModule({
  imports: [
    SharedModule,
    TranslateModule,
    TransportsRoutingModule
  ],
  declarations: [
    TransportsComponent,
    DayComponent,
    MonthComponent,
    WeekComponent,
    CalendarHeaderComponent
  ],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    },
    TransportService
  ]
})
export class TransportsModule { }
