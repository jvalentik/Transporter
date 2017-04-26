import { Routes } from '@angular/router';
import {
  TransportsComponent,
  DayComponent,
  WeekComponent,
  MonthComponent,
} from '../components';
import { TransportAddEditComponent } from '../components/transports/transport-add-edit/transport-add-edit.component';

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
      },
      {
        path: 'add',
        component: TransportAddEditComponent
      }
    ]
  }
];
