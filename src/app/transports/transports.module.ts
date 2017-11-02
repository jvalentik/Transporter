import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TransportsRoutingModule } from './routing/transports-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CustomDateFormatter } from './services/custom-date-formater';
import { CalendarDateFormatter } from 'angular-calendar';
import { TransportService } from './services/transport.service';
import { CalendarComponent } from './components/calendar/calendar.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CalendarEffects } from './effects/calendar.effects';
import { TransportsPageComponent } from './containers/transports-page/transports-page.component';

@NgModule({
  imports: [
    SharedModule,
    TranslateModule.forChild(),
    TransportsRoutingModule,
    StoreModule.forFeature('transports', reducers),
    EffectsModule.forFeature([CalendarEffects])
  ],
  declarations: [
    TransportsPageComponent,
    CalendarComponent
  ],
  providers: [
    CustomDateFormatter,
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    },
    TransportService
  ]
})
export class TransportsModule { }
