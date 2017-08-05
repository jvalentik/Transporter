import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-view-header',
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewHeaderComponent implements OnInit {
  @Input()
  viewList: Array<string>;
  @Output()
  viewChanged: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
