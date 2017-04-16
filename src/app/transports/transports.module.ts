import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportsComponent } from './transports.component';
import { TodayComponent } from './today/today.component';
import { TransportsRoutingModule } from './transports-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MonthComponent } from './month/month.component';
import { WeekComponent } from './week/week.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TransportsRoutingModule
  ],
  declarations: [
    TransportsComponent,
    TodayComponent,
    MonthComponent,
    WeekComponent
  ]
})
export class TransportsModule { }
