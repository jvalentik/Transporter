/**
 * Created by johny on 26/04/2017.
 */
/**
 * Created by johny on 26/04/2017.
 */
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2/database';
import { Transport } from '../models/transport';

@Injectable()
export class TransportService {
  private basePath = '/transports';

  constructor(private db: AngularFireDatabase) {
  }

  getTransportList(query = {}): FirebaseListObservable<Array<Transport>> {
    return this.db.list(this.basePath, {
      query: query
    });
  }

  getTransport(key: string): FirebaseObjectObservable<Transport> {
    return this.db.object(`${this.basePath}/${key}`);
  }

  createTransport(item: Transport): void {
    this.getTransportList().push(item);
  }

  updateTransport(key: string, value: any): void {
    this.getTransportList().update(key, value)
        .catch(error => this.handleError(error))
  }

  // Deletes a single item
  deleteTransport(key: string): void {
    this.getTransportList().remove(key)
        .catch(error => this.handleError(error))
  }

  // Deletes the entire list of items
  deleteAll(): void {
    this.getTransportList().remove()
        .catch(error => this.handleError(error))
  }

  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }

}
