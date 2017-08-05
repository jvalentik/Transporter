import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import {
  CloseSideNavAction,
  OpenSidenavAction,
  ResizeWindowAction
} from '../../actions/layout.actions';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.store.dispatch(new ResizeWindowAction({
      width: event.target.innerWidth,
      height: event.target.innerHeight
    }));
  }
  showSidenav: Observable<boolean>;
  sidenavMode: Observable<string>;
  viewList: Array<NavItem>;
  isOpen: boolean;
  mode: string;

  constructor(private translate: TranslateService,
              private store: Store<fromRoot.State>) {
    this.showSidenav = this.store.select(fromRoot.getShowSidenav);
    this.sidenavMode = this.store.select(fromRoot.getSidenavMode);
  }

  ngOnInit() {
    this.store.select(fromRoot.getShowSidenav)
        .subscribe(isOpen => {
          this.isOpen = isOpen;
        });
    this.store.select(fromRoot.getSidenavMode)
        .subscribe(mode => {
          this.mode = mode;
        });
    this.store.select(fromRoot.getViewList)
        .subscribe(views => {
          this.viewList = views
        });
    this.translate.addLangs(['en', 'sk']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|sk/) ? browserLang : 'en');
  }

  onToggleSidenav(): void {
    if (this.isOpen) {
      this.store.dispatch(new CloseSideNavAction());
    } else {
      this.store.dispatch(new OpenSidenavAction());
    }
  }

  onSidenavClosed(): void {
    this.store.dispatch(new CloseSideNavAction());
  }

  closeIfSmall(): void {
    if (this.mode === 'over') {
      this.store.dispatch(new CloseSideNavAction());
    }
  }
}
