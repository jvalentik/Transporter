import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Lesson } from './lesson';

@Injectable()
export class DataService {

  constructor(private db: AngularFireDatabase) {}

  getAllData(): Observable<Lesson[]> {
    return this.db.list('classes').map(Lesson.fromJsonList);
  }

}
