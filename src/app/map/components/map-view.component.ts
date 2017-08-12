import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AgmPosition } from '../models/agm-position';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapViewComponent {
  @Input() position: AgmPosition = {latitude: 0, longitude: 0};
  @Input() zoom = 4;
  @Input() markers: Array<AgmPosition>;
}
