import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportsComponent } from './transports.component';
import { TodayComponent } from './today/today.component';
import { TransportsRoutingModule } from './transports-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TransportsRoutingModule
  ],
  declarations: [
    TransportsComponent,
    TodayComponent
  ]
})
export class TransportsModule { }
