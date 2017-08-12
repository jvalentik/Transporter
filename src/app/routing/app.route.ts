import { Routes } from '@angular/router';
import { NotFoundPageComponent } from '../main/containers/not-found/not-found.component';
/**
 * Created by johny on 25/04/2017.
 */

export const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full'},
  { path: 'map', loadChildren: 'app/map/map.module#MapModule' },
  { path: 'transports',
    loadChildren: 'app/transports/transports.module#TransportsModule'},
  { path: '**', component: NotFoundPageComponent }
];
