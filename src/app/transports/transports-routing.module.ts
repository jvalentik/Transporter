import { RouterModule, Routes } from '@angular/router';
import { TransportsComponent } from './transports.component';
import { TodayComponent } from './today/today.component';
import { NgModule } from '@angular/core';
import { WeekComponent } from './week/week.component';
import { buildPath } from 'selenium-webdriver/http';
import { MonthComponent } from './month/month.component';

const transportsRoutes: Routes = [
  {
    path: '',
    component: TransportsComponent,
    children: [
      { path: '',
        redirectTo: '/today',
        pathMatch: 'full'},
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
