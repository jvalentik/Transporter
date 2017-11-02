/**
 * Created by johny on 26/04/2017.
 */
/**
 * Created by johny on 26/04/2017.
 */
import { Injectable } from '@angular/core';
import { Transport } from '../models/transport';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class TransportService {
  private transportsCollection: AngularFirestoreCollection<Transport>;

  constructor(private fireStore: AngularFirestore) {
    this.transportsCollection = this.fireStore.collection<Transport>('transports');
  }

  addTransport(newTransport: Transport) {
    this.transportsCollection.add(newTransport);
  }
}
