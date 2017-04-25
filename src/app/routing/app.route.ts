import { Routes } from '@angular/router';
import { MapComponent } from '../components/map/map.component';
/**
 * Created by johny on 25/04/2017.
 */

export const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full'},
  { path: 'map', component: MapComponent },
  { path: 'transports',
    loadChildren: 'app/transports/transports.module#TransportsModule'}
];
