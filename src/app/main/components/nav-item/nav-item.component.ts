import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {
  @Input() navItem: NavItem;
  @Output() activate: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
