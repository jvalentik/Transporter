import { Customer } from './customer';
/**
 * Created by johny on 25/04/2017.
 */

export interface Trip {
  id: string;
  driverIds: Array<number>;
  vehicleId: number;
  sender: Customer;
  receiver: Customer;
  distance: number;
  loadingDate: Date;
  unloadingDate: Date;
  state: TripState
}

export enum TripState {
  RECEIVED,
  LOADED,
  PENDING,
  DELIVERED
}

