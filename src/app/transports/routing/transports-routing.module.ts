import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { transportsRoutes } from './transports.route';

@NgModule({
  imports: [
    RouterModule.forChild(transportsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransportsRoutingModule {}
