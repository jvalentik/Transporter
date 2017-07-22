import { TransportStatus } from './transport-status';

export interface Transport {
  id: string;
  createdOn: Date;
  updatedOn: Date;
  sendersIds: Array<string>;
  receiversIds: Array<string>;
  loadingDate: Date;
  unloadingDate: Date;
  status: TransportStatus;
  driverId: string;
  totalDistance: number;
}
