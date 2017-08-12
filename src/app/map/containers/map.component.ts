import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromMap from '../reducers/index';
import { SetPositionAction, SetZoomAction } from '../actions/map.actions';
import { AgmPosition } from '../models/agm-position';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  position: Observable<AgmPosition>;
  zoom: Observable<number>;
  markers: Observable<Array<AgmPosition>>;

  constructor(private store: Store<fromMap.State>) {
    this.position = this.store.select(fromMap.getPosition);
    this.zoom = this.store.select(fromMap.getZoom);
    this.markers = this.store.select(fromMap.getMarkers);
  }

  ngOnInit() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.store.dispatch(new SetPositionAction({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }));
        this.store.dispatch(new SetZoomAction(12));
      });
    }
  }
}
