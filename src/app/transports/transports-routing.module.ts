import { RouterModule, Routes } from '@angular/router';
import { TransportsComponent } from './transports.component';
import { TodayComponent } from './today/today.component';
import { NgModule } from '@angular/core';
import { WeekComponent } from './week/week.component';
import { MonthComponent } from './month/month.component';

const transportsRoutes: Routes = [
  {
    path: 'transports',
    component: TransportsComponent,
    children: [
      {
        path: 'today',
        component: TodayComponent
      },
      {
        path: 'week',
        component: WeekComponent
      },
      {
        path: 'month',
        component: MonthComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(transportsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransportsRoutingModule {}
