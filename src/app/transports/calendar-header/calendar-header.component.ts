import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class CalendarHeaderComponent implements OnInit {
  @Input() view: string;

  @Input() viewDate: Date;

  @Output() viewDateChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
