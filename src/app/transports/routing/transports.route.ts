import { Routes } from '@angular/router';
import { TransportsComponent } from '../containers/transports/transports.component';
import { DayComponent } from '../components/day/day.component';
import { WeekComponent } from '../components/week/week.component';
import { MonthComponent } from '../components/month/month.component';
export const transportsRoutes: Routes = [
  {
    path: '',
    component: TransportsComponent,
    children: [
      {
        path: '',
        redirectTo: '/day',
        pathMatch: 'full'
      },
      {
        path: 'day',
        component: DayComponent
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
