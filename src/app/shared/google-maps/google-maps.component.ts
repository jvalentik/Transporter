import { Component, Input, OnInit } from '@angular/core';
import {
  AgmCoreModule
} from 'angular2-google-maps/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  @Input()
  latitude: number;

  @Input()
  longitude: number;

  @Input()
  zoom = 8;

  constructor() { }

  ngOnInit() {
  }

}
