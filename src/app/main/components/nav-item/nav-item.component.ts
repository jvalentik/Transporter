import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {
  @Input() header = '';
  @Input() footer = false;
  @Input() icon: string;
  @Input() routerLink: string;
  @Output() activate: EventEmitter<void> = new EventEmitter();
}
