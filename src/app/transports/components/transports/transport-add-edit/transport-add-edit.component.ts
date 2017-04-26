import { Component, OnDestroy, OnInit } from '@angular/core';
import { TripActions } from '../../../../core/store/actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppStore } from '../../../../core/store/app-store';
import { Vehicle } from '../../../../model/vehicle';
import { Driver } from '../../../../model/driver';
import { Trip } from '../../../../model/trip';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-transport-add-edit',
  templateUrl: './transport-add-edit.component.html',
  styleUrls: ['./transport-add-edit.component.scss']
})
export class TransportAddEditComponent implements OnInit, OnDestroy {
  vehicles: Array<Vehicle>;
  drivers: Array<Driver>;
  subscriptions: Array<Subscription> = [];

  tripForm: FormGroup;
  trip: Trip;

  constructor(private fb: FormBuilder,
              private store: Store<AppStore>,
              private router: Router,
              private tripActions: TripActions) { }

  ngOnInit() {
    this.subscriptions.push(
      this.store
        .select(s => s.vehicles)
        .subscribe(vehicles => this.vehicles = vehicles));
    this.subscriptions.push(
      this.store
        .select(s => s.drivers)
        .subscribe(drivers => this.drivers = drivers));

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  createForm(trip: Trip) {
    this.tripForm = this.fb.group({
      vehicle: ['', Validators.required],
      sender: ['', Validators.required],
      receiver: ['', Validators.required]
    });
  }

  saveTrip(trip: Trip): void {
    this.store.dispatch(this.tripActions.addTrip(trip));
  }

  onSubmit() {

  }

  getTripFromFormValue(formValue: any): void {
  }
}
