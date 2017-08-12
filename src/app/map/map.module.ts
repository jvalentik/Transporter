import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MapRoutingModule } from './routing/map-routing.module';
import { MapViewComponent } from './components/map-view.component';
import { MapComponent } from './containers/map.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MapRoutingModule,
    StoreModule.forFeature('map', reducers)
  ],
  declarations: [
    MapViewComponent,
    MapComponent
  ]
})
export class MapModule { }
