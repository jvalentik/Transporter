import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;

  constructor() {
    this.latitude = 48.4372781;
    this.longitude = 19.0687613;
    this.zoom = 8;
  }

  ngOnInit() {
  }

}
