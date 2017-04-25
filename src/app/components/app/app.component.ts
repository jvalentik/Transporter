import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MdSidenav } from '@angular/material';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild(MdSidenav)
  sideNav: MdSidenav;

  constructor(private router: Router,
              private translate: TranslateService) {
    this.translate.addLangs(['en', 'sk']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|sk/) ? browserLang : 'en');
  }

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
