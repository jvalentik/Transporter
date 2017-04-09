import { RouterModule, Routes } from '@angular/router';
import { TransportsComponent } from './transports.component';
import { TodayComponent } from './today/today.component';
import { NgModule } from '@angular/core';

const transportsRoutes: Routes = [
  {
    path: '',
    component: TransportsComponent,
    children: [
      {
        path: '',
        component: TodayComponent
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
