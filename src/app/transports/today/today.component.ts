import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RoadTrip } from '../model';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  viewDate: Date;
  view = 'day';
  locale: string;
  events: RoadTrip[] = [
    { id: '1',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      },
      start: new Date(),
      title: 'Testing roadtrip',
      sender: 'Bucina',
      senderCity: 'Zvolen',
      receiver: 'Gebruder',
      receiverCity: 'Senec',
      distance: 200,
      draggable: true,
      resizable: true,
      driver: {
        id: '1',
        name: 'Jan',
        surname: 'Valentik'
      },
      vehicle: {
        id: '1',
        brand: 'Scania Topline',
        numberPlate: 'ZV 808 CP',
        color: 'red',
        year: 1998,
        mileage: 100000
      }
    }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.viewDate = new Date();
    this.locale = this.translate.getBrowserCultureLang().split('-')[0];
  }
}
