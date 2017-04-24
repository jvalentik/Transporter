/**
 * Created by johny on 24/04/2017.
 */
import { CalendarEvent } from 'angular-calendar';

export interface Driver {
  id: string;
  name: string;
  surname: string;
}

export interface Vehicle {
  id: string;
  brand: string;
  numberPlate: string;
  year: number;
  mileage: number;
  color: string;
}

export interface RoadTrip extends CalendarEvent {
  id: string;
  driver: Driver;
  vehicle: Vehicle;
  sender: string;
  senderCity: string;
  receiver: string;
  receiverCity: string;
  distance: number;
}
