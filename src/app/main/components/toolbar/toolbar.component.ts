import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnChanges,
  Output, SimpleChanges
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { letProto } from 'rxjs/operator/let';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnChanges {
  @Output() openMenu = new EventEmitter<void>();
  @Input() tooltipMsg: string;
  @Output() signIn = new EventEmitter<void>();
  @Output() signOut = new EventEmitter<void>();
  @Input() isLoggedIn: boolean;
  @Input() userName: string;
  @Input() email: string;
  @Input() avatarUrl: string;

  backgroundImg: SafeStyle;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'avatarUrl' && changes[propName].currentValue) {
        this.backgroundImg = this.sanitizer
                                 .bypassSecurityTrustStyle(`url(${this.avatarUrl})`);
      }
    }
  }
}
