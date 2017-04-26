import {
  Component, OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomerActions } from '../../core/store/actions/customer.actions';
import { AppStore } from '../../core/store/app-store';
import { Store } from '@ngrx/store';
import { VehicleActions } from '../../core/store/actions/vehicle.actions';
import { DriverActions } from '../../core/store/actions/driver.actions';
import { TripActions } from '../../core/store/actions/trip.actions';
import { Subscription } from 'rxjs/Subscription';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  sub: Subscription;
  constructor(private translate: TranslateService,
              private customerActions: CustomerActions,
              private vehicleActions: VehicleActions,
              private driverActions: DriverActions,
              private tripActions: TripActions,
              private store: Store<AppStore>) {
    this.translate.addLangs(['en', 'sk']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|sk/) ? browserLang : 'en');
    this.sub = store.select(s => s.tripSaveStatus).subscribe((status) => {
      console.log(status);
    });
  }

  ngOnInit() {
    this.store.dispatch(this.customerActions.loadCustomers());
    this.store.dispatch(this.vehicleActions.loadVehicles());
    this.store.dispatch(this.driverActions.loadDrivers());
    this.store.dispatch(this.tripActions.loadTrips());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }
}
