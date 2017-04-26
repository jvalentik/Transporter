import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TransportsRoutingModule } from './routing/transports-routing.module';
import {
  TransportsComponent,
  DayComponent,
  WeekComponent,
  MonthComponent,
  CalendarHeaderComponent
} from './components';
import { TranslateModule } from '@ngx-translate/core';
import { CustomDateFormatter } from './services/custom-date-formater';
import { CalendarDateFormatter } from 'angular-calendar';
import { TransportAddEditComponent } from './components/transports/transport-add-edit/transport-add-edit.component';

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
    CalendarHeaderComponent,
    TransportAddEditComponent
  ],
  providers: [ {
    provide: CalendarDateFormatter,
    useClass: CustomDateFormatter
  }

  ]
})
export class TransportsModule { }
