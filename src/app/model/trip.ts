import { Customer } from './customer';
import { Vehicle } from './vehicle';
import { Driver } from './driver';
/**
 * Created by johny on 25/04/2017.
 */

export interface Trip {
  sendersIds: string[];
  receiversIds: string[];
  loadingDate: Date;
  unloadingDate: Date;
  status: TripStatus;
  driverId: string;
  totalDistance?: number;
}

export enum TripStatus {
  UNASSIGNED,
  ASSIGNED,
  LOADED,
  PENDING,
  DELIVERED
}

