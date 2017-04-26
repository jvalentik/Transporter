import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import * as reducer from './store/app-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  CustomerService,
  VehicleService,
  DriverService,
  TripService
} from './services';
import {
  VehicleEffects,
  CustomerEffects,
  DriverEffects,
  TripEffects
} from './store/effects';
import {
  CustomerActions,
  VehicleActions,
  DriverActions,
  TripActions
} from './store/actions';

@NgModule({
  imports: [
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.provideStore(reducer.default),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(VehicleEffects),
    EffectsModule.run(CustomerEffects),
    EffectsModule.run(DriverEffects),
    EffectsModule.run(TripEffects)
  ],
  providers: [
    CustomerService,
    VehicleService,
    DriverService,
    TripService,
    CustomerActions,
    VehicleActions,
    DriverActions,
    TripActions
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
