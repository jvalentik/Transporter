import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-view-header',
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewHeaderComponent {
  @Input()
  viewList: Array<string>;

  @Output()
  viewChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }


}
