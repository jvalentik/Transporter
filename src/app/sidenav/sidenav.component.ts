import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {
  @ViewChild(MdSidenav)
  sideNav: MdSidenav;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sideNav.close()
            .then(result => console.log('sidenav closed'));      }
    });
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }

  toggleSideNav(): void {
    console.log('toggling sidenav');
    this.sideNav.toggle().then(() => {
      console.log('toggled sidenav');
    });
  }
}
