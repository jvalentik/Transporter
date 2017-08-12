import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { mapRoutes } from './map.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mapRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MapRoutingModule { }
